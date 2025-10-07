import { transporter } from "../utils/sendEmail.js";

// Controller: handle job application
export const applyForJob = async (req, res) => {
  try {
    const { firstname, lastname, email, role, mobile, responsibility } = req.body;
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
      from: `"Job Portal - Candidate" <${email}>`,
      to: process.env.TO_EMAIL,
      subject: `${firstname} ${lastname} – ${role} Application`,
      html: `
        <p>Dear <strong>HR</strong>,</p>
        <p>I hope this email finds you well.</p>
        <p>
          I am writing to express my keen interest in the
          <strong>${role}</strong> position at <strong>U Technology</strong>.
          Please find my resume attached.
        </p>
        <p><strong>Responsibilities:</strong></p>
        <ul>
          ${responsibility.split(",").map(r => `<li>${r.trim()}</li>`).join("")}
        </ul>
        <p style="margin-top: 25px">
          Best Regards,<br>
          Name - <strong>${firstname} ${lastname}</strong><br>
          Mobile - <strong>${mobile}</strong><br>
          Email - <strong>${email}</strong>
        </p>
      `,
      attachments: resume
        ? [{ filename: resume.originalname, content: resume.buffer }]
        : [],
    };

    await transporter.sendMail(adminMailOptions);

    // ======================
    // 2. Send confirmation to Candidate
    // ======================
    const userMailOptions = {
      from: `"U Technology Careers" <${process.env.HR_EMAIL}>`,
      to: email,
      subject: `Your Application for ${role} at U Technology has been successfully submitted`,
      html: `
        <p>Hi <strong>${firstname} ${lastname}</strong>,</p>
        <p>
          Thank you for applying for the <strong>${role}</strong> position at
          <strong>U Technology.</strong> We have successfully received your
          application.
        </p>
        <p><strong>Responsibilities:</strong></p>
        <ul>
          ${responsibility.split(",").map(r => `<li>${r.trim()}</li>`).join("")}
        </ul>
        <p>Best Regards,<br><strong>HR- ${process.env.HR_EMAIL}</strong></p>
      `,
    };

    await transporter.sendMail(userMailOptions);

    // Final API Response
    res.json({
      success: true,
      message: "Application sent successfully! Confirmation email sent to candidate.",
    });
  } catch (error) {
    console.error("Error in applyForJob:", error);
    res.status(500).json({
      success: false,
      message: "Error sending email. Please try again later.",
    });
  }
};
