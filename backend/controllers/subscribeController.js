const { sendEmail } = require("../utils/sendEmail");
const { footerLinks, legalNotices } = require("../config/footerData");

exports.subscribe = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    console.log("📩 New subscriber:", email);

    // ==========================
    // Generate footer HTML dynamically
    // ==========================
    const footerHTML = `
      <div style="padding:20px; background:#f8f9fa; text-align:center; font-size:14px; color:#555;">
        <table style="width:100%; max-width:600px; margin:auto; text-align:left;">
          <tr>
            ${footerLinks
              .map(
                (section) => `
                <td style="vertical-align:top; padding:10px;">
                  <h4 style="color:#0d6efd; margin-bottom:8px;">${
                    section.title
                  }</h4>
                  <ul style="list-style:none; padding:0; margin:0;">
                    ${section.links
                      .map(
                        (link) =>
                          `<li style="margin-bottom:5px;">
                            <a href="https://usystem.software${link.to}" 
                              style="color:#333; text-decoration:none;">${link.label}</a>
                          </li>`
                      )
                      .join("")}
                  </ul>
                </td>
              `
              )
              .join("")}
          </tr>
        </table>
        <hr style="margin:20px 0; border:0; border-top:1px solid #ddd;" />
        <div style="text-align:left; font-size:12px; color:#777; line-height:1.6;">
          ${legalNotices.map((n) => `<p>${n}</p>`).join("")}
        </div>
      </div>
    `;

    // ==========================
    // 1️⃣ User Email Template
    // ==========================
    const userTemplate = `
    <div style="font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px;">
      <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,0.1);">
        <div style="background: #0d6efd; padding: 20px; text-align: center; color: #fff;">
          <h1 style="margin: 0;">Welcome to <span style="color: #ffc107;">U-Tech</span> 🎉</h1>
        </div>
        <div style="padding: 20px; text-align: center;">
          <h2 style="color: #333;">Hello 👋</h2>
          <p style="font-size: 16px; color: #555;">
            You have successfully subscribed to our website. We’ll keep you updated with our latest news and offers.
          </p>
          <a href="https://usystem.software/" style="display: inline-block; margin-top: 20px; padding: 12px 24px; background: #0d6efd; color: #fff; text-decoration: none; border-radius: 6px; font-size: 16px;">
            Visit Our Website
          </a>
        </div>
        
        ${footerHTML} <!-- ✅ Injected footer with links + notices -->

        <div style="background: #0d6efd; padding: 10px; text-align: center; color: #fff; font-size: 12px;">
          © ${new Date().getFullYear()} U-Tech. All rights reserved.
        </div>
      </div>
    </div>
    `;

    // ==========================
    // 2️⃣ Admin Notification Template
    // ==========================
    const adminTemplate = `
    <div style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 20px;">
      <div style="max-width: 600px; margin: auto; background: #ffffff; border-left: 5px solid #0d6efd; padding: 20px; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.1);">
        <h2 style="margin-top: 0; color: #0d6efd;">📢 New Subscriber Alert</h2>
        <p style="font-size: 16px; color: #333;">
          A new user has subscribed to <b>U-Tech</b>.
        </p>
        <p style="font-size: 16px; color: #555;">
          <b>Email:</b> ${email}
        </p>
        <p style="margin-top: 20px; font-size: 14px; color: #777;">
          This is an automated notification sent to <b>Admin</b>.
        </p>
      </div>
    </div>
    `;

    // ==========================
    // Send Emails
    // ==========================
    await sendEmail(
      email,
      "Thanks for Subscribing to U-Tech!",
      userTemplate,
      "Thanks for Subscribing to U-Tech!"
    );

    await sendEmail(
      process.env.ADMIN_EMAIL,
      "📢 New Subscriber Joined U-Tech",
      adminTemplate,
      `New subscriber: ${email}`
    );

    res
      .status(200)
      .json({ message: "Subscription successful & admin notified!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error subscribing", error });
  }
};
