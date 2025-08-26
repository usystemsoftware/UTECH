const { transporter } = require("../utils/sendEmail");

exports.submitContact = async (req, res) => {
  const { name, email, phone, company, message, tradeshow, from } = req.body;

  // Basic validation for required fields
  if (!name || !email || !phone || !message || !tradeshow) {
    return res.status(400).json({
      success: false,
      message:
        "Required fields missing. Please ensure all mandatory fields are filled.",
    });
  }

  try {
    // 1. Email content for your Admin/Sales Team
    const adminMailOptions = {
      from: `"U Technology Contact Portal" <${email}>`,
      to: process.env.SALES_EMAIL || "sales@usystem.software",
      subject: `New Contact Form Submission: ${name} (Tradeshow: ${tradeshow})`,
      html: `
        <div style="font-family: 'Inter', sans-serif; background-color: #f8f8f8; padding: 20px; border-radius: 8px; border: 1px solid #e0e0e0;">
          <h2 style="color: #333; text-align: center; margin-bottom: 25px; font-weight: 600;">👋 New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; width: 150px; font-weight: 500; color: #555;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: 500; color: #555;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;"><a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: 500; color: #555;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: 500; color: #555;">Company:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${
                company || "N/A"
              }</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: 500; color: #555;">Tradeshow:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${tradeshow}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: 500; color: #555;">Source Page:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${
                from || "N/A"
              }</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: 500; color: #555; vertical-align: top;">Message:</td>
              <td style="padding: 10px; color: #333; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <p style="color: #666; font-size: 14px; text-align: center;">This submission was received on ${new Date().toLocaleString()}.</p>
        </div>
      `,
    };

    // 2. Email content for the User (Confirmation)
    const userMailOptions = {
      from: `"U Technology Team" <${email}>`,
      to: email,
      subject: `We’ve Received Your Inquiry, ${name}!`,
      html: `
    <div style="sans-serif; background-color: #fff; padding: 10px; max-width:100%;">
      
      <p style="color: #34495e; font-size: 16px; line-height: 1.6;">
        Dear <strong>${name}</strong>,
      </p>

      <p style="color: #34495e; font-size: 16px; line-height: 1.6;">
        We’re excited to inform you that we have successfully received your inquiry 
        regarding your interest in <strong>${from}</strong>.  
        Your details are now with our team, and one of our specialists will reach out to you shortly 
        to understand your requirements and provide tailored solutions.
      </p>

      <p style="color: #34495e; font-size: 16px; line-height: 1.6;">
        At <strong>U Technology</strong>, we pride ourselves on delivering innovative digital solutions — 
        from <em>application development</em> and <em>QA testing</em> to <em>digital transformation</em> 
        and <em>cloud services</em>.  
        We are confident that our expertise can help accelerate your business growth.
      </p>

      <p style="color: #34495e; font-size: 16px; line-height: 1.6;">
        In the meantime, feel free to learn more about our services and success stories by 
        visiting our website.
      </p>

      <div style="text-align: center; margin: 30px 0;">
        <a href="https://usystem.software" style="background-color: #009896; color: #fff; padding: 10px; border-radius: 3px; text-decoration: none; font-weight: 600; font-size: 13px;">
          Explore Our Website
        </a>
      </div>

      <p style="color: #34495e; font-size: 15px; margin-top: 25px;">
        We appreciate your interest in U Technology and look forward to speaking with you soon.  
        Thank you once again for reaching out — you’re in good hands!
      </p>

      <p style="color: #7f8c8d; font-size: 14px; margin-top: 30px;">
        Best Regards,<br>
        <strong>U Technology Team</strong>
      </p>

      <p style="color: #95a5a6; font-size: 12px; margin-top: 20px; text-align: center;">
        This is an automated confirmation email. Please do not reply.  
      </p>
    </div>
  `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return res.status(200).json({
      success: true,
      message:
        "Contact form submitted successfully! We've sent a confirmation to your email and our team will connect with you soon.",
    });
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({
      success: false,
      message:
        "Something went wrong while submitting your form. Please try again later.",
      error: error.message,
    });
  }
};
