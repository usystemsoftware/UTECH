// bookingController.js
import { createGoogleMeet } from "../utils/createGoogleMeet.js";
import { transporter } from "../utils/sendEmail.js";

// === Send Booking Email ===
export const sendBookingEmail = async (req, res) => {
  const { name, email, phone, description, source, customer, date, slot } =
    req.body;

  if (!name || !email || !customer || !customer.name || !customer.email || !date || !slot) {
    return res.status(400).json({
      success: false,
      message: "Required fields missing: name, email, customer, date, slot",
    });
  }

  try {
    // ... your existing email code
  } catch (err) {
    console.error("Error in sendBookingEmail:", err);
    res.status(500).json({
      success: false,
      message: "Failed to send emails. Please try again later.",
    });
  }
};

// === Generate Google Meet Link ===
export const generateLink = async (req, res) => {
  try {
    const { name, email, date, slot } = req.query;

    if (!name || !email || !date || !slot) {
      return res.status(400).send("Missing required fields");
    }

    const meetLink = await createGoogleMeet(name, email, date, slot);

    const mailOptions = {
      from: `"U Technology" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "📅 Your Google Meet Invitation - U Technology",
      html: `...your HTML code...`,
    };

    await transporter.sendMail(mailOptions);

    res.send(`...your HTML confirmation page...`);
  } catch (err) {
    console.error("Error generating meet:", err);
    res.status(500).send("Failed to generate meeting");
  }
};
