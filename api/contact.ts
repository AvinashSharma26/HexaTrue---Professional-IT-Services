// ✅ FORCE NODE RUNTIME (VERY IMPORTANT FOR VERCEL)
export const config = {
  runtime: 'nodejs',
};

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const formData = req.body;

  // ✅ BASIC VALIDATION
  if (!formData?.email || !formData?.firstName) {
    return res.status(400).json({
      error: 'First Name and Email are required',
    });
  }

  try {
    // 🔐 ENV VARIABLES
    const tenantId = process.env.MICROSOFT_TENANT_ID;
    const clientId = process.env.MICROSOFT_CLIENT_ID;
    const clientSecret = process.env.MICROSOFT_CLIENT_SECRET;
    const senderUserId = process.env.MICROSOFT_SENDER_USER_ID;

    // ⚠️ SAFETY CHECK
    if (!tenantId || !clientId || !clientSecret || !senderUserId) {
      console.warn('Missing env vars. Form data:', formData);
      return res.status(200).json({
        success: true,
        message: 'Form submitted (email disabled – env missing)',
      });
    }

    // =====================================================
    // 🔑 GET MICROSOFT GRAPH ACCESS TOKEN
    // =====================================================
    const tokenResponse = await fetch(
      `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
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
      console.error('Token Error:', tokenData);
      throw new Error('Failed to get access token');
    }

    const accessToken = tokenData.access_token;

    // =====================================================
    // 📩 SEND MAIL FUNCTION
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

      // Graph usually returns 202 or 204
      if (!response.ok) {
        const text = await response.text();
        console.error('Graph Error:', text);
        throw new Error(`Mail send failed: ${response.status}`);
      }
    };

    // =====================================================
    // 1️⃣ ADMIN EMAIL
    // =====================================================
    await sendMail({
      message: {
        subject: 'New Lead from HexaTrue Website',
        body: {
          contentType: 'HTML',
          content: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${formData.firstName} ${
            formData.lastName || ''
          }</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone || 'N/A'}</p>
            <p><strong>Country:</strong> ${formData.country || 'N/A'}</p>
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
    });

    // =====================================================
    // 2️⃣ USER AUTO-REPLY EMAIL
    // =====================================================
    await sendMail({
      message: {
        subject: 'Thank You for Contacting HexaTrue',
        body: {
          contentType: 'HTML',
          content: `
            <p>Hi ${formData.firstName},</p>
            <p>
              Thank you for contacting <strong>HexaTrue</strong>.
              We have received your request and our team will get back to you within 24 hours.
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
    });

    // =====================================================
    // ✅ SUCCESS RESPONSE
    // =====================================================
    return res.status(200).json({
      success: true,
      message: 'Thank you! Our team will contact you shortly.',
    });
  } catch (error) {
    console.error('Contact API ERROR:', error);
    return res.status(500).json({
      error: 'Internal server error. Please try again later.',
    });
  }
}
