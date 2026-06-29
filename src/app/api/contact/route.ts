import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { projectType, firstName, lastName, email, phone, address, message } = body;

    if (!firstName || !lastName || !email || !phone || !address || !message) {
      return NextResponse.json(
        { error: "Required fields are missing." },
        { status: 400 }
      );
    }

    const brevoApiKey = process.env.BREVO_API_KEY;

    if (!brevoApiKey) {
      console.error("Missing BREVO_API_KEY environment variable.");
      return NextResponse.json(
        { error: "Mail server configuration is missing." },
        { status: 500 }
      );
    }

    // Beautiful HTML template aligned with Edenza Tech theme (dark blue and coral orange)
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New General Inquiry</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #FFFDF8;
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
          }
          .container {
            max-width: 600px;
            margin: 30px auto;
            background-color: #ffffff;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(10, 25, 47, 0.05);
          }
          .header {
            background: linear-gradient(135deg, #0A192F 0%, #172A45 100%);
            padding: 40px 30px;
            text-align: center;
          }
          .logo {
            color: #57D3C6;
            font-size: 24px;
            font-weight: 800;
            letter-spacing: 2px;
            margin: 0;
          }
          .header-title {
            color: #ffffff;
            font-size: 20px;
            font-weight: 600;
            margin: 15px 0 0 0;
          }
          .content {
            padding: 40px 35px;
          }
          .greeting {
            font-size: 16px;
            color: #0A192F;
            font-weight: 700;
            margin-bottom: 20px;
          }
          .data-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 30px;
          }
          .data-table td {
            padding: 12px 0;
            border-bottom: 1px solid #F5FAF9;
            vertical-align: top;
          }
          .label {
            font-size: 11px;
            font-weight: 800;
            text-transform: uppercase;
            color: #8892B0;
            width: 130px;
            letter-spacing: 1px;
          }
          .value {
            font-size: 14px;
            color: #0A192F;
            font-weight: 600;
          }
          .spec-card {
            background-color: #F5FAF9;
            border-radius: 16px;
            padding: 25px;
            margin-top: 15px;
          }
          .spec-title {
            font-size: 11px;
            font-weight: 800;
            text-transform: uppercase;
            color: #134D4A;
            letter-spacing: 1px;
            margin: 0 0 10px 0;
          }
          .spec-text {
            font-size: 13px;
            color: #0A192F;
            line-height: 1.6;
            margin: 0;
            white-space: pre-wrap;
          }
          .footer {
            background-color: #F5FAF9;
            padding: 25px 35px;
            text-align: center;
            border-top: 1px solid rgba(19, 77, 74, 0.05);
          }
          .footer-text {
            font-size: 11px;
            color: #8892B0;
            margin: 0 0 8px 0;
          }
          .badge {
            display: inline-block;
            background-color: #FFF9F5;
            color: #E07A2E;
            font-size: 10px;
            font-weight: 800;
            padding: 4px 10px;
            border-radius: 20px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="logo">EDENZATECH</h1>
            <p class="header-title">New General Inquiry</p>
          </div>
          <div class="content">
            <div class="greeting">Hey Team,</div>
            <p style="font-size: 14px; color: #4A5568; line-height: 1.5; margin-top: 0;">
              You have received a new contact form message. Details are listed below:
            </p>
            
            <table class="data-table">
              <tr>
                <td class="label">Full Name</td>
                <td class="value">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td class="label">Email Address</td>
                <td class="value">
                  <a href="mailto:${email}" style="color: #E07A2E; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td class="label">WhatsApp/Phone</td>
                <td class="value">${phone}</td>
              </tr>
              <tr>
                <td class="label">Address</td>
                <td class="value">${address}</td>
              </tr>
              <tr>
                <td class="label">Looking For</td>
                <td class="value">
                  <span class="badge">${projectType}</span>
                </td>
              </tr>
            </table>

            <div class="spec-card">
              <h3 class="spec-title">Project Details</h3>
              <p class="spec-text">${message}</p>
            </div>
          </div>
          <div class="footer">
            <p class="footer-text">This inquiry was generated from edenzatech.com/contact</p>
            <p class="footer-text" style="margin: 0; font-size: 10px;">&copy; ${new Date().getFullYear()} EDENZATECH. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email using Brevo HTTP API
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": brevoApiKey,
        "Content-Type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify({
        sender: {
          name: "Edenza Tech Lead Alert",
          email: "antigravityfree70@gmail.com"
        },
        to: [
          {
            email: "antigravityfree70@gmail.com",
            name: "Edenza Admin"
          }
        ],
        subject: `General Inquiry: ${projectType} - from ${firstName} ${lastName}`,
        htmlContent: htmlContent
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Brevo API error:", errorText);
      return NextResponse.json(
        { error: "Failed to deliver email through Brevo." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Contact handler error:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error." },
      { status: 500 }
    );
  }
}
