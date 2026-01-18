export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const formData = req.body;

  // ✅ Basic validation
  if (!formData?.email || !formData?.firstName) {
    return res.status(400).json({ error: 'Name and Email are required' });
  }

  try {
    // 🔐 ENV VARIABLES
    const tenantId = process.env.MICROSOFT_TENANT_ID;
    const clientId = process.env.MICROSOFT_CLIENT_ID;
    const clientSecret = process.env.MICROSOFT_CLIENT_SECRET;
    const senderEmail =
      process.env.MICROSOFT_SENDER_EMAIL || 'projects@hexatrue.com';
    const senderUserId = process.env.MICROSOFT_SENDER_USER_ID; // Azure Object ID

    if (!tenantId || !clientId || !clientSecret || !senderUserId) {
      console.warn('ENV missing. Lead data:', formData);
      return res.status(200).json({
        success: true,
        message:
          'Submission received (Simulation Mode: Configure env variables).',
      });
    }

    // 🔑 GET MICROSOFT GRAPH TOKEN
    const tokenResponse = await fetch(
      `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          client_id: clientId,
          client_secret: clientSecret,
          grant_type: 'client_credentials',
          scope: 'https://graph.microsoft.com/.default',
        }),
      }
    );

    const tokenData = await tokenResponse.json();
    if (!tokenData.access_token) {
      throw new Error('Failed to obtain Graph access token');
    }

    const accessToken = tokenData.access_token;

    // =====================================================
    // 🔁 COMMON SEND MAIL FUNCTION (IMPORTANT FIX)
    // =====================================================
    const sendMail = async (mailBody: any) => {
      const response = await fetch(
        `https://graph.microsoft.com/v1.0/users/${senderUserId}/sendMail`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(mailBody),
        }
      );

      // ❌ DO NOT read response body (Graph may return empty 204)
      if (!response.ok) {
        throw new Error(`Graph sendMail failed: ${response.status}`);
      }
    };

    // =====================================================
    // 1️⃣ ADMIN LEAD EMAIL
    // =====================================================
    const adminMail = {
      message: {
        subject: 'New Lead from HexaTrue Website',
        from: {
          emailAddress: {
            address: senderEmail,
            name: 'HexaTrue',
          },
        },
        body: {
          contentType: 'HTML',
          content: `
            <h2>New Lead Received</h2>
            <p><strong>Name:</strong> ${formData.firstName} ${
            formData.lastName || ''
          }</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone || 'N/A'}</p>
            <p><strong>Company:</strong> ${formData.company || 'N/A'}</p>
            <p><strong>Service:</strong> ${
              formData.service || 'General Inquiry'
            }</p>
            <p><strong>Message:</strong></p>
            <p>${(formData.message || '').replace(/\n/g, '<br>')}</p>
          `,
        },
        toRecipients: [
          {
            emailAddress: {
              address: 'projects@hexatrue.com',
            },
          },
        ],
        replyTo: [
          {
            emailAddress: {
              address: formData.email,
              name: formData.firstName,
            },
          },
        ],
      },
      saveToSentItems: true, // ✅ REQUIRED
    };

    await sendMail(adminMail);

    // =====================================================
    // 2️⃣ USER AUTO-REPLY EMAIL
    // =====================================================
    const userMail = {
      message: {
        subject: 'Thank You for Contacting HexaTrue',
        from: {
          emailAddress: {
            address: senderEmail,
            name: 'HexaTrue',
          },
        },
        body: {
          contentType: 'HTML',
          content: `
            <p>Hi ${formData.firstName},</p>
            <p>
              Thank you for contacting <strong>HexaTrue</strong>.
              We’ve received your request and our team will get back to you within <strong>24 hours</strong>.
            </p>
            <p>
              Regards,<br/>
              <strong>HexaTrue Team</strong>
            </p>
          `,
        },
        toRecipients: [
          {
            emailAddress: {
              address: formData.email,
            },
          },
        ],
      },
      saveToSentItems: true, // ✅ REQUIRED
    };

    try {
      await sendMail(userMail);
    } catch (err) {
      // ❌ Auto-reply fail hone par main request fail nahi hogi
      console.error('Auto-reply failed:', err);
    }

    return res.status(200).json({
      success: true,
      message: 'Thank you! Our team will contact you shortly.',
    });
  } catch (error: any) {
    console.error('Contact API error:', error);
    return res
      .status(500)
      .json({ error: 'Internal server error. Please try again later.' });
  }
}
