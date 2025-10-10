import Contact from "../models/Contact.js";
import { transporter } from "../utils/sendEmail.js";

export const submitContact = async (req, res, next) => {
  const { name, email, phone, company, message, tradeshow, from } = req.body;

  // 🧾 Basic validation
  if (!name || !email || !phone || !message || !tradeshow) {
    return res.status(400).json({
      success: false,
      message:
        "Required fields missing. Please ensure all mandatory fields are filled.",
    });
  }

  try {
    // 📝 1️⃣ Save to Database
    const newContact = await Contact.create({
      name,
      email,
      phone,
      company,
      message,
      tradeshow,
      from,
    });

    // 📩 2️⃣ Admin Email
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
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">
                <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: 500; color: #555;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: 500; color: #555;">Company:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${company || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: 500; color: #555;">Tradeshow:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${tradeshow}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: 500; color: #555;">Source Page:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${from || "N/A"}</td>
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

    // 📧 3️⃣ User Confirmation Email
    const userMailOptions = {
      from: `"U Technology Team" <${process.env.SALES_EMAIL || "sales@usystem.software"}>`,
      to: email,
      subject: `We’ve Received Your Inquiry, ${name}!`,
      html: `
        <div style="font-family: 'Inter', sans-serif; background-color: #fff; padding: 20px;">
          <p style="color: #34495e; font-size: 16px; line-height: 1.6;">
            Dear <strong>${name}</strong>,
          </p>
          <p style="color: #34495e; font-size: 16px; line-height: 1.6;">
            Thank you for reaching out to <strong>U Technology</strong>.
            We’ve received your inquiry regarding <strong>${from || "our services"}</strong>.
            Our team will get in touch with you shortly.
          </p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://usystem.software" style="background-color: #009896; color: #fff; padding: 10px 15px; border-radius: 4px; text-decoration: none; font-weight: 600;">
              Explore Our Website
            </a>
          </div>
          <p style="color: #666; font-size: 14px;">Best regards,<br/>The U Technology Team</p>
        </div>
      `,
    };

    // 📤 4️⃣ Send Emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    // ✅ Final Response
    res.status(200).json({
      success: true,
      message:
        "Contact form submitted successfully! We've sent a confirmation to your email and our team will connect with you soon.",
      data: newContact,
    });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({
      success: false,
      message:
        "Something went wrong while submitting your form. Please try again later.",
      error: error.message,
    });
  }
};
