export default async function handler(req: any, res: any) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const formData = req.body;

  try {
    // 1. Authenticate with Microsoft Graph (Client Credentials Flow)
    const tenantId = process.env.MICROSOFT_TENANT_ID;
    const clientId = process.env.MICROSOFT_CLIENT_ID;
    const clientSecret = process.env.MICROSOFT_CLIENT_SECRET;
    const senderEmail = process.env.MICROSOFT_SENDER_EMAIL || 'projects@hexatrue.com';

    // If API keys aren't configured, return success simulation for UI testing
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

    // 2. Send Lead Notification Email to Admin (projects@hexatrue.com)
    const leadEmailBody = {
      message: {
        subject: `New Lead from HexaTrue Website`,
        body: {
          contentType: 'HTML',
          content: `
            <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 12px;">
              <h2 style="color: #2563eb; margin-top: 0;">New Lead Generated</h2>
              <p style="color: #64748b; font-size: 14px;">A new inquiry has been submitted via the HexaTrue website.</p>
              
              <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; width: 150px;"><strong>Name:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #f1f5f9;">${formData.firstName || formData.name || ''} ${formData.lastName || ''}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #f1f5f9;"><strong>Email:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${formData.email}">${formData.email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #f1f5f9;"><strong>Phone:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #f1f5f9;">${formData.phone || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #f1f5f9;"><strong>Company:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #f1f5f9;">${formData.company || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #f1f5f9;"><strong>Inquiry Type:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #f1f5f9;">${formData.service || 'General Inquiry'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #f1f5f9;"><strong>Source URL:</strong></td>
                  <td style="padding: 10px; border-bottom: 1px solid #f1f5f9;"><a href="${formData.sourceUrl}" style="color: #2563eb; font-size: 12px;">${formData.sourceUrl || 'N/A'}</a></td>
                </tr>
              </table>
              
              <div style="margin-top: 20px;">
                <strong>Message / Requirement:</strong>
                <p style="background: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb; font-style: italic; color: #334155;">
                  ${(formData.message || formData.requirement || 'No additional details provided.').replace(/\n/g, '<br>')}
                </p>
              </div>
              
              <hr style="margin-top: 30px; border: 0; border-top: 1px solid #f1f5f9;" />
              <p style="font-size: 11px; color: #94a3b8; text-align: center;">
                Sent securely via HexaTrue.com Cloud Infrastructure
              </p>
            </div>
          `,
        },
        toRecipients: [
          { emailAddress: { address: 'projects@hexatrue.com' } },
        ],
      },
    };

    const sendLeadMailRes = await fetch(`https://graph.microsoft.com/v1.0/users/${senderEmail}/sendMail`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadEmailBody),
    });

    if (!sendLeadMailRes.ok) {
      const errorData = await sendLeadMailRes.json();
      console.error('Microsoft Graph Admin Notification Error:', errorData);
      throw new Error('Could not dispatch admin notification email');
    }

    // 3. Send Auto-Reply Email to User (formData.email)
    const userDisplayName = formData.firstName || formData.name || 'valued visitor';
    const autoReplyBody = {
      message: {
        subject: `Thank You for Contacting HexaTrue`,
        body: {
          contentType: 'HTML',
          content: `
            <div style="font-family: sans-serif; padding: 30px; color: #333; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 16px; margin: auto;">
              <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #2563eb; margin: 0; font-size: 24px;">HexaTrue</h1>
                <p style="color: #64748b; font-size: 14px; margin-top: 5px;">Engineering Excellence</p>
              </div>
              
              <p style="font-size: 16px; line-height: 1.6;">Hi ${userDisplayName},</p>
              
              <p style="font-size: 16px; line-height: 1.6;">
                Thank you for reaching out to us! We have successfully received your request and our team is already reviewing the details.
              </p>
              
              <div style="background-color: #f0f7ff; padding: 20px; border-radius: 12px; margin: 25px 0; border-left: 4px solid #2563eb;">
                <p style="margin: 0; color: #1e40af; font-weight: bold;">
                  Our team will get back to you within 24 hours.
                </p>
              </div>
              
              <p style="font-size: 16px; line-height: 1.6;">
                In the meantime, feel free to explore our <a href="https://hexatrue.com/work" style="color: #2563eb; text-decoration: none; font-weight: 500;">latest case studies</a> to see how we’ve helped other enterprises scale their digital infrastructure.
              </p>
              
              <p style="font-size: 16px; line-height: 1.6; margin-top: 40px;">
                Best Regards,<br>
                <strong>The HexaTrue Team</strong>
              </p>
              
              <hr style="margin-top: 40px; border: 0; border-top: 1px solid #e2e8f0;" />
              <p style="font-size: 12px; color: #94a3b8; text-align: center; margin-top: 20px;">
                © ${new Date().getFullYear()} HexaTrue. All rights reserved.
              </p>
            </div>
          `,
        },
        toRecipients: [
          { emailAddress: { address: formData.email } },
        ],
      },
    };

    const sendAutoReplyRes = await fetch(`https://graph.microsoft.com/v1.0/users/${senderEmail}/sendMail`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(autoReplyBody),
    });

    if (!sendAutoReplyRes.ok) {
      const errorData = await sendAutoReplyRes.json();
      console.error('Microsoft Graph Auto-Reply Error:', errorData);
      // We don't throw error here to avoid failing the whole request if only the auto-reply fails
    }

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Submission processing error:', error);
    return res.status(500).json({ error: 'We encountered an internal error. Please try again later.' });
  }
}