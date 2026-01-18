
export const config = {
  runtime: 'nodejs',
};

export default async function handler(req: any, res: any) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { token, ...formData } = req.body;

  if (!token) {
    return res.status(400).json({ error: 'Security token is missing' });
  }

  try {
    // 1. Verify reCAPTCHA v3
    // Using the provided secret key
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY || '6LfVX04sAAAAAAXrcPg3qRqjHGEj-uIS1d7Ed7ka';
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify`;
    
    const recaptchaRes = await fetch(verifyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: recaptchaSecret,
        response: token
      }),
    });
    
    const recaptchaJson = await recaptchaRes.json();

    // Simplify check: As long as reCAPTCHA reports success, we proceed. 
    // We log the score for debugging but don't block based on it initially.
    if (!recaptchaJson.success) {
      console.error('reCAPTCHA verification failed:', recaptchaJson['error-codes']);
      return res.status(403).json({ error: 'Security verification failed. Please refresh and try again.' });
    }

    console.log(`Verified submission with reCAPTCHA score: ${recaptchaJson.score}`);

    // 2. Authenticate with Microsoft Graph (Client Credentials Flow)
    const tenantId = process.env.MICROSOFT_TENANT_ID;
    const clientId = process.env.MICROSOFT_CLIENT_ID;
    const clientSecret = process.env.MICROSOFT_CLIENT_SECRET;
    const senderEmail = process.env.MICROSOFT_SENDER_EMAIL || 'Projects@hexatrue.com';

    // If API keys aren't configured in Vercel environment yet, log and return success for testing UI
    if (!tenantId || !clientId || !clientSecret) {
      console.warn('Microsoft Graph credentials not configured. Lead data:', formData);
      return res.status(200).json({ 
        success: true, 
        message: 'Submission received (Simulation Mode: Please configure environment variables in Vercel).' 
      });
    }

    // Get Access Token
    const tokenResponse = await fetch(`https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: clientId,
        scope: 'https://graph.microsoft.com/.default',
        client_secret: clientSecret,
        grant_type: 'client_credentials',
      }),
    });

    const tokenData = await tokenResponse.json();
    if (!tokenData.access_token) {
      throw new Error('Failed to obtain Microsoft Graph access token');
    }

    const access_token = tokenData.access_token;

    // 3. Send Email via Microsoft Graph
    const emailBody = {
      message: {
        subject: `New Lead: ${formData.service || 'General Inquiry'} - HexaTrue.com`,
        body: {
          contentType: 'HTML',
          content: `
            <div style="font-family: sans-serif; padding: 20px; color: #333;">
              <h2 style="color: #2563eb;">New Contact Form Submission</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${formData.firstName || formData.name || ''} ${formData.lastName || ''}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${formData.email}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${formData.phone || 'N/A'}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Company:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${formData.company || 'N/A'}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Service:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${formData.service || 'N/A'}</td></tr>
              </table>
              <div style="margin-top: 20px;">
                <strong>Message / Requirement:</strong>
                <p style="background: #f8fafc; padding: 15px; border-radius: 8px;">${formData.message || formData.requirement || 'No additional details provided.'}</p>
              </div>
              <hr style="margin-top: 30px; border: 0; border-top: 1px solid #eee;" />
              <p style="font-size: 11px; color: #999;">Verified via Google reCAPTCHA v3 (Score: ${recaptchaJson.score})</p>
            </div>
          `,
        },
        toRecipients: [
          { emailAddress: { address: 'Projects@hexatrue.com' } },
        ],
      },
    };

    const sendMailRes = await fetch(`https://graph.microsoft.com/v1.0/users/${senderEmail}/sendMail`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailBody),
    });

    if (!sendMailRes.ok) {
      const errorData = await sendMailRes.json();
      console.error('Microsoft Graph API Error:', errorData);
      throw new Error('Could not dispatch email through Microsoft 365');
    }

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Submission processing error:', error);
    return res.status(500).json({ error: 'We encountered an internal error. Please try again later.' });
  }
}
