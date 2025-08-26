const { transporter } = require("../utils/sendEmail");

// Controller: handle job application
exports.applyForJob = async (req, res) => {
  try {
    const { firstname, lastname, email, role, mobile, responsibility } =
      req.body;
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
      subject: ` ${firstname} ${lastname} – ${role} Application`,
      html: `
     <p>Dear <strong>HR</strong>,</p>
      <p>I hope this email finds you well.</p>
      <p>
        I am writing to express my keen interest in the
        <strong>${role}</strong> position at <strong>U Technology</strong>, as advertised on U Technology
        Website. With my background in <strong>${role}</strong> and experience in
        <strong>${role}</strong> skill, I am confident I possess the skills and
        qualifications to be a strong asset to your team. which I believe is
        directly relevant to the requirements of this position. Please find my
        resume and cover letter attached for your review. Thank you for your time
        and consideration. I am eager to discuss how my skills and experience can
        benefit <strong>U Technology</strong> and look forward to hearing from you
        soon. Sincerely,
      </p>

      <p><strong>Responsibilities:</strong></p>
        <ul>
          ${responsibility
            .split(",")
            .map((r) => `<li>${r.trim()}</li>`)
            .join("")}
      </ul>

      <p style="margin-top: 25px">
        Best Regards,<br>
        Name - <strong>${firstname} ${lastname}</strong><br>
        Mobile - <strong>${mobile}</strong><br>
        Email - <strong>${email}</strong>
      </p>

      <p style="font-size: 12px; color: gray">
        This email was sent automatically by U Technology Job Portal.
      </p>

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
      from: `"U Technology Careers" <${process.env.HR_EMAIL}>`,
      to: email,
      subject: `Your Application for ${role} at U Technology has been successfully submitted`,
      html: `
        <p>Hi <strong>${firstname} ${lastname}</strong>,</p>
        <p>
          Thank you for applying for the <strong>${role}</strong> position at
          <strong>U Technology.</strong> We have successfully received your
          application and appreciate your interest in joining our team. Our hiring
          team is currently reviewing all submissions. If your qualifications and
          experience are a good fit for this role, we will contact you within
          <strong>${mobile}</strong> business days to discuss the next steps. You
          can expect to hear from us whether or not your profile moves forward in
          the hiring process. In the meantime, you can learn more about our company
          and culture by visiting
          <a href="https://usystem.software" style="color: #1a73e8"
            >https://usystem.software</a
          >. Thank you again for your time and interest in a career with us.
        </p>

        <p><strong>Responsibilities:</strong></p>
        <ul>
          ${responsibility
            .split(",")
            .map((r) => `<li>${r.trim()}</li>`)
            .join("")}
        </ul>

        <p>If you have any questions, feel free to reply to this email.</p>

        <p style="margin-top: 25px">
          Best Regards,<br />
          <strong>HR- ${process.env.HR_EMAIL}</strong><br />
          U Technology Careers<br />
          <a href="https://usystem.software" style="color: #1a73e8"
            >https://usystem.software</a
          >
        </p>

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
