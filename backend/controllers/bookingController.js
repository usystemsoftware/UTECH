const { createGoogleMeet } = require("../utils/createGoogleMeet");
const { transporter } = require("../utils/sendEmail");

exports.sendBookingEmail = async (req, res) => {
  const { name, email, phone, description, source, customer, date, slot } =
    req.body;


  if (
    !name || !email || !customer || !customer.name || !customer.email || !date || !slot
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
      subject: `✅ Booking Confirmed with ${customer.name}`,
      html: `
  <div style="max-width:650px;margin:0 auto;font-family:Arial,Helvetica,sans-serif;color:#2c3e50;line-height:1.7;">
    
    <p>Dear <strong>${name}</strong>,</p>

    <p>We’re excited to inform you that your booking with <strong>${customer.name}</strong> has been successfully confirmed.  
    Your details are now with our team, and we’ll connect with you at the scheduled time.</p>

    <p>Here are your booking details:</p>
    <p>
      <strong>Date:</strong> ${date} <br/>
      <strong>Time:</strong> ${slot} <br/>
      <strong>Email:</strong> ${email} <br/>
      <strong>Phone:</strong> ${phone || "N/A"} <br/>
      <strong>Requirements:</strong> ${description || "N/A"}
    </p>

    <p>At <strong>U Technology</strong>, we pride ourselves on delivering seamless digital experiences and customer-focused solutions.  
    Thank you for choosing us — you’re in good hands!</p>

    <div style="margin:30px 0;">
      <a href="https://usystem.software/" 
        style="display:inline-block;padding:10px 18px;background:#00796b;color:#fff;text-decoration:none;border-radius:4px;font-weight:bold;">
        🔗 Visit Our Website
      </a>
    </div>

    <p>We appreciate your interest in U Technology and look forward to connecting with you soon.</p>

    <p style="margin-top:30px;">Best regards,<br/>
    <strong>U Technology Team</strong></p>

    <p style="font-size:12px;color:#888;margin-top:25px;text-align:center;">
      This is an automated confirmation email. Please do not reply.
    </p>
  </div>
  `,
    };




    // ======================
    // 2. Email to Admin
    // ======================
    const customerMailOptions = {
      from: `"Slot Booking System - U Technology" <${process.env.EMAIL_USER}>`,
      to: process.env.SALES_EMAIL,
      subject: `📩 New Booking from ${name}`,
      html: `
  <div style="max-width:650px;margin:0 auto;font-family:Arial,Helvetica,sans-serif;color:#2c3e50;line-height:1.7;">
    
    <p>Hi <strong>${customer.name}</strong>,</p>

    <p>You have received a new booking request from <strong>${name}</strong>.  
    Below are the details for your reference:</p>

    <p>
      <strong>Name:</strong> ${name} <br/>
      <strong>Email:</strong> ${email} <br/>
      <strong>Phone:</strong> ${phone || "N/A"} <br/>
      <strong>Booking Source:</strong> ${source || "N/A"} <br/>
      <strong>Requirements:</strong> ${description || "N/A"} <br/>
      <strong>Date:</strong> ${date} <br/>
      <strong>Time:</strong> ${slot}
    </p>

    <div style="margin:30px 0;">
      <a href="http://localhost:5002/bookings/generate-meet?email=${encodeURIComponent(
        email
      )}&name=${encodeURIComponent(name)}&date=${encodeURIComponent(
        date
      )}&slot=${encodeURIComponent(slot)}" 
        style="display:inline-block;padding:10px 18px;background:#388e3c;color:#fff;text-decoration:none;border-radius:4px;font-weight:bold;">
        🔗 Generate Meeting
      </a>
    </div>

    <p>Please follow up with the customer if needed.</p>

    <p style="margin-top:30px;">Best regards,<br/>
    <strong>U Technology Booking System</strong></p>

    <p style="font-size:12px;color:#888;margin-top:25px;text-align:center;">
      This email was sent automatically by the booking system.
    </p>
  </div>
  `,
    };




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

// =======================================
// When admin clicks "Generate Meeting"
// =======================================
exports.generateLink = async (req, res) => {
  try {
    const { name, email, date, slot } = req.query;

    if (!name || !email || !date || !slot) {
      return res.status(400).send("Missing required fields");
    }

    // ✅ Create Google Meet at selected slot
    const meetLink = await createGoogleMeet(name, email, date, slot);

    // ✅ Send Meet Link to the user
    const mailOptions = {
      from: `"U Technology" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "📅 Your Google Meet Invitation - U Technology",
      html: `
        <div style="font-family: Arial, sans-serif; background:#f9fafb; padding:20px;">
          <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; padding:25px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
            
            <h2 style="color:#0d9488; text-align:center; margin-bottom:20px;">U Technology Meeting Invitation</h2>
            
            <p style="font-size:16px; color:#333;">Hi <strong>${name}</strong>,</p>
            
            <p style="font-size:15px; color:#444; line-height:1.6;">
              Your online meeting has been scheduled successfully.  
              Please join using the button below:
            </p>
            
            <div style="text-align:center; margin:25px 0;">
              <a href="${meetLink}" target="_blank" 
                style="background:#0d9488; color:#fff; text-decoration:none; padding:12px 24px; 
                border-radius:6px; font-size:16px; font-weight:bold; display:inline-block;">
                🔗 Join Meeting
              </a>
            </div>
            
            <div style="background:#f1f5f9; padding:15px; border-radius:8px; margin-top:20px;">
              <p style="margin:5px 0; font-size:15px; color:#111;">
                <strong>📅 Date:</strong> ${date}
              </p>
              <p style="margin:5px 0; font-size:15px; color:#111;">
                <strong>⏰ Time:</strong> ${slot}
              </p>
            </div>
            
            <p style="font-size:14px; color:#666; margin-top:25px;">
              Best regards,<br/>
              <strong>Team U Technology</strong>
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Show message to Admin in browser
    res.send(`
  <div style="font-family: Inter, Arial, sans-serif; background: #f8fafc; min-height:100vh; display:flex; align-items:center; justify-content:center; padding:40px;">
    <div style="background: #ffffff; border:1px solid #e2e8f0; border-radius:16px; padding:32px 40px; max-width:520px; width:100%; box-shadow:0 6px 18px rgba(0,0,0,0.08); text-align:center;">
      
      <div style="font-size:42px; margin-bottom:15px; color:#22c55e;">✅</div>
      <h2 style="margin:0; font-size:24px; font-weight:700; color:#0f172a;">Meeting Scheduled</h2>
      <p style="margin:12px 0 24px; font-size:15px; color:#475569;">
        Invitation has been sent to <strong style="color:#1e293b;">${email}</strong>
      </p>

      <div style="background:#f1f5f9; border-radius:12px; padding:16px; margin-bottom:20px; word-wrap:break-word; border:1px dashed #cbd5e1;">
        <a href="${meetLink}" target="_blank" style="color:#2563eb; font-size:16px; text-decoration:none; font-weight:600;">🔗 Join Meeting Link</a>
      </div>

      <p style="margin:6px 0; font-size:14px; color:#334155;"><strong>Date:</strong> ${date}</p>
      <p style="margin:6px 0 24px; font-size:14px; color:#334155;"><strong>Time:</strong> ${slot}</p>

      <a href="${meetLink}" target="_blank" style="display:inline-block; padding:12px 24px; background:linear-gradient(135deg,#2563eb,#3b82f6); color:#fff; font-weight:600; border-radius:8px; text-decoration:none; box-shadow:0 4px 12px rgba(59,130,246,0.3); transition:0.3s;">🚀 Join Now</a>
    </div>
  </div>
`);


  } catch (err) {
    console.error("Error generating meet:", err);
    res.status(500).send("Failed to generate meeting");
  }
};

