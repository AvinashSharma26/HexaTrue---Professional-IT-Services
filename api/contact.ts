
export const config = {
  runtime: 'nodejs',
};

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { token, ...formData } = req.body;

  if (!token) {
    return res.status(400).json({ error: 'reCAPTCHA token is missing' });
  }

  try {
    // 1. Verify reCAPTCHA v3
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY || '6LfVX04sAAAAAAXrcPg3qRqjHGEj-uIS1d7Ed7ka';
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${token}`;
    
    const recaptchaRes = await fetch(verifyUrl, { method: 'POST' });
    const recaptchaJson = await recaptchaRes.json();

    if (!recaptchaJson.success || recaptchaJson.score < 0.5) {
      return res.status(403).json({ error: 'Security verification failed. Please try again.' });
    }

    // 2. Authenticate with Microsoft Graph (Client Credentials Flow)
    const tenantId = process.env.MICROSOFT_TENANT_ID;
    const clientId = process.env.MICROSOFT_CLIENT_ID;
    const clientSecret = process.env.MICROSOFT_CLIENT_SECRET;
    const senderEmail = process.env.MICROSOFT_SENDER_EMAIL || 'Projects@hexatrue.com';

    if (!tenantId || !clientId || !clientSecret) {
      console.error('Missing Microsoft API environment variables');
      // Falling back to logging for development if variables aren't set yet
      console.log('Lead Data:', formData);
      return res.status(200).json({ success: true, message: 'Lead captured (Simulated)' });
    }

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

    const { access_token } = await tokenResponse.json();

    // 3. Send Email via Microsoft Graph
    const emailBody = {
      message: {
        subject: `New Lead: ${formData.service || 'Inquiry'} from ${formData.firstName || formData.name}`,
        body: {
          contentType: 'HTML',
          content: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${formData.firstName || ''} ${formData.lastName || ''} ${formData.name || ''}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Company:</strong> ${formData.company || 'N/A'}</p>
            <p><strong>Service:</strong> ${formData.service || 'N/A'}</p>
            <p><strong>Message/Requirement:</strong> ${formData.message || formData.requirement || 'No message provided'}</p>
            <hr />
            <p><em>This inquiry was verified by Google reCAPTCHA v3.</em></p>
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
      console.error('Microsoft Graph Error:', errorData);
      throw new Error('Failed to send email via Microsoft Graph');
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error. Please try again later.' });
  }
}
