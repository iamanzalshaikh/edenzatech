import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      companyName,
      phone,
      classification,
      vertical,
      budget,
      milestone,
      requirements, // Array of strings representing checked boxes
      visionBrief,
      referenceLinks
    } = body;

    if (!fullName || !email || !visionBrief) {
      return NextResponse.json(
        { error: "Required fields (Full name, Email, Vision brief) are missing." },
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

    // Build the list of technical components
    const requirementsList = requirements && requirements.length > 0
      ? requirements.map((req: string) => `<li>${req}</li>`).join("")
      : "<li>No technical components selected</li>";

    // Beautiful HTML template aligned with Edenza Tech theme (dark blue and coral orange)
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Consultation Request</title>
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
            padding: 45px 40px;
          }
          .section-title {
            font-size: 11px;
            font-weight: 800;
            text-transform: uppercase;
            color: #E07A2E;
            letter-spacing: 1.5px;
            border-bottom: 2px solid #FFF9F5;
            padding-bottom: 6px;
            margin: 25px 0 12px 0;
          }
          .section-title:first-of-type {
            margin-top: 0;
          }
          .data-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 10px;
          }
          .data-table td {
            padding: 10px 0;
            border-bottom: 1px solid #F5FAF9;
            vertical-align: top;
          }
          .label {
            font-size: 11px;
            font-weight: 800;
            text-transform: uppercase;
            color: #8892B0;
            width: 155px;
            letter-spacing: 0.5px;
          }
          .value {
            font-size: 13px;
            color: #0A192F;
            font-weight: 600;
          }
          .spec-card {
            background-color: #F5FAF9;
            border-radius: 16px;
            padding: 20px;
            margin-top: 10px;
          }
          .spec-text {
            font-size: 13px;
            color: #0A192F;
            line-height: 1.6;
            margin: 0;
            white-space: pre-wrap;
          }
          .requirements-list {
            margin: 0;
            padding-left: 20px;
            font-size: 13px;
            color: #0A192F;
            line-height: 1.6;
            font-weight: 600;
          }
          .requirements-list li {
            margin-bottom: 4px;
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
            <p class="header-title">Product Consultation Blueprint</p>
          </div>
          <div class="content">
            
            <div class="section-title">Section 1: Identity &amp; Company</div>
            <table class="data-table">
              <tr>
                <td class="label">Full Name</td>
                <td class="value">${fullName}</td>
              </tr>
              <tr>
                <td class="label">Email Address</td>
                <td class="value">
                  <a href="mailto:${email}" style="color: #E07A2E; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td class="label">Company / Product</td>
                <td class="value">${companyName || "N/A"}</td>
              </tr>
              <tr>
                <td class="label">WhatsApp / Phone</td>
                <td class="value">${phone || "N/A"}</td>
              </tr>
            </table>

            <div class="section-title">Section 2: Classification</div>
            <table class="data-table">
              <tr>
                <td class="label">Core Type</td>
                <td class="value"><span class="badge">${classification}</span></td>
              </tr>
              <tr>
                <td class="label">Business Vertical</td>
                <td class="value"><span class="badge" style="background-color: #F5FAF9; color: #134D4A;">${vertical}</span></td>
              </tr>
            </table>

            <div class="section-title">Section 3: Budget &amp; Timeline</div>
            <table class="data-table">
              <tr>
                <td class="label">Budget Range</td>
                <td class="value" style="color: #134D4A; font-weight: 700;">${budget}</td>
              </tr>
              <tr>
                <td class="label">Target Timeline</td>
                <td class="value">${milestone}</td>
              </tr>
            </table>

            <div class="section-title">Section 4: Technical Components</div>
            <div style="margin: 10px 0;">
              <ul class="requirements-list">
                ${requirementsList}
              </ul>
            </div>

            <div class="section-title">Section 5: Vision Brief &amp; References</div>
            <div class="spec-card">
              <div style="font-size: 10px; font-weight: 800; text-transform: uppercase; color: #8892B0; margin-bottom: 6px;">Vision Brief</div>
              <p class="spec-text">${visionBrief}</p>
            </div>
            ${referenceLinks ? `
              <div class="spec-card" style="margin-top: 12px; background-color: #FFF9F5;">
                <div style="font-size: 10px; font-weight: 800; text-transform: uppercase; color: #E07A2E; margin-bottom: 6px;">Reference Links</div>
                <p class="spec-text"><a href="${referenceLinks}" target="_blank" style="color: #E07A2E; text-decoration: underline; font-weight: 600;">${referenceLinks}</a></p>
              </div>
            ` : ""}

          </div>
          <div class="footer">
            <p class="footer-text">This consultation lead was generated from edenzatech.com/book-consultation</p>
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
          name: "Edenza Tech Planner Alert",
          email: "antigravityfree70@gmail.com"
        },
        to: [
          {
            email: "antigravityfree70@gmail.com",
            name: "Edenza Admin"
          }
        ],
        subject: `New Blueprint Request: [${classification}] - from ${fullName} (${companyName || "Personal"})`,
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
    console.error("Book consultation handler error:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error." },
      { status: 500 }
    );
  }
}
