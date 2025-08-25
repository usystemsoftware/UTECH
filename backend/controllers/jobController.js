const { transporter } = require("../utils/sendEmail");

// Controller: handle job application
exports.applyForJob = async (req, res) => {
  try {
    const { firstname, lastname, email, role, mobile } = req.body;
    const resume = req.file; // uploaded by multer

    if (!firstname || !lastname || !email || !role || !mobile) {
      return res.status(400).json({
        success: false,
        message: "All fields are required (firstname, lastname, email, role)",
      });
    }

    // ======================
    // 1. Send mail to Admin
    // ======================
    const adminMailOptions = {
      from: `"Job Portal - U Technology" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      subject: `New Job Application | ${role} | ${firstname} ${lastname}`,
      html: `
        <h2>📩 New Job Application Received</h2>
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Role Applied For:</strong> ${role}</p>
        <p>Resume is attached with this email.</p>
        <br/>
        <hr/>
        <p style="font-size: 12px; color: gray;">This email was sent automatically by U Technology Job Portal.</p>
      `,
      attachments: resume
        ? [
            {
              filename: resume.originalname,
              content: resume.buffer,
            },
          ]
        : [],
    };

    await transporter.sendMail(adminMailOptions);

    // ======================
    // 2. Send confirmation to Candidate
    // ======================
    const userMailOptions = {
      from: `"U Technology Careers" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Application Submitted Successfully | ${role}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #4CAF50;">✅ Application Submitted</h2>
          <p>Dear <strong>${firstname} ${lastname}</strong>,</p>
          <p>Thank you for applying for the position of <strong>${role}</strong> at <b>U Technology</b>.</p>
          <p>We have successfully received your application and our team will review it shortly. If your profile matches our requirements, we will get in touch with you.</p>
          <br/>
          <h3>📌 Your Application Details</h3>
          <ul>
            <li><strong>Name:</strong> ${firstname} ${lastname}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Mobile:</strong> ${mobile}</li>
            <li><strong>Applied Role:</strong> ${role}</li>
          </ul>
          <br/>
          <p>If you have any questions, feel free to reply to this email.</p>
          <br/>
          <p>Best regards,</p>
          <p><strong>HR Team</strong><br/>U Technology Careers</p>
          <hr/>
          <p style="font-size: 12px; color: gray;">This is an automated confirmation email. Please do not reply directly.</p>
        </div>
      `,
    };

    await transporter.sendMail(userMailOptions);

    // Final API Response
    res.json({
      success: true,
      message:
        "Application sent successfully! Confirmation email sent to candidate.",
    });
  } catch (error) {
    console.error("Error in applyForJob:", error);
    res.status(500).json({
      success: false,
      message: "Error sending email. Please try again later.",
    });
  }
};
