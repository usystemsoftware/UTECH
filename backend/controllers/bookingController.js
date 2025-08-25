const { transporter } = require("../utils/sendEmail");

exports.sendBookingEmail = async (req, res) => {
  const { name, email, phone, description, source, customer, date, slot } =
    req.body;

  // Validation
  if (
    !name ||
    !email ||
    !customer ||
    !customer.name ||
    !customer.email ||
    !date ||
    !slot
  ) {
    return res.status(400).json({
      success: false,
      message: "Required fields missing: name, email, customer, date, slot",
    });
  }

  try {
    // ======================
    // 1. Email to User
    // ======================
    const userMailOptions = {
      from: `"Slot Booking With - U Technology" "${customer.name}" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Booking Confirmed with ${customer.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #4CAF50;">✅ Booking Confirmed</h2>
          <p>Hi <strong>${name}</strong>,</p>
          <p>Your booking with <strong>${
            customer.name
          }</strong> has been successfully confirmed.</p>
          <h3>📌 Booking Details</h3>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone || "N/A"}</li>
            <li><strong>Booking Source:</strong> ${source || "N/A"}</li>
            <li><strong>Requirements:</strong> ${description || "N/A"}</li>
            <li><strong>Date:</strong> ${date}</li>
            <li><strong>Time:</strong> ${slot}</li>
          </ul>
          <br/>
          <p>Thank you for choosing <b>${customer.name}</b>!</p>
          <hr/>
          <p style="font-size: 12px; color: gray;">This is an automated confirmation email. Please do not reply directly.</p>
        </div>
      `,
    };

    // ======================
    // 2. Email to Customer
    // ======================
    const customerMailOptions = {
      from: `"Slot Booking System - U Technology" <${process.env.EMAIL_USER}>`,
      to: customer.email,
      subject: `New Booking from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #2196F3;">📩 New Booking Received</h2>
          <p>Hi <strong>${customer.name}</strong>,</p>
          <p>You have a new booking from <strong>${name}</strong>.</p>
          <h3>📌 Booking Details</h3>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone || "N/A"}</li>
            <li><strong>Booking Source:</strong> ${source || "N/A"}</li>
            <li><strong>Requirements:</strong> ${description || "N/A"}</li>
            <li><strong>Date:</strong> ${date}</li>
            <li><strong>Time:</strong> ${slot}</li>
          </ul>
          <br/>
          <p>Please reach out to the customer if needed.</p>
          <hr/>
          <p style="font-size: 12px; color: gray;">This email was sent automatically by the booking system.</p>
        </div>
      `,
    };

    // Send Emails
    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(customerMailOptions);

    res.status(200).json({
      success: true,
      message: "Booking confirmed and emails sent successfully!",
    });
  } catch (err) {
    console.error("Error in sendBookingEmail:", err);
    res.status(500).json({
      success: false,
      message: "Failed to send emails. Please try again later.",
    });
  }
};
