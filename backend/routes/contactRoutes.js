import express from "express";
import Contact from "../models/Contact.js"; // Make sure you have a Mongoose model
const router = express.Router();

// POST: Submit contact form
router.post("/send-contact", async (req, res) => {
  try {
    const { name, email, phone, company, message, tradeshow, from } = req.body;

    if (!name || !email || !phone || !message || !tradeshow) {
      return res.status(400).json({ success: false, message: "All required fields must be filled." });
    }

    const newContact = new Contact({
      name,
      email,
      phone,
      company,
      message,
      tradeshow,
      from,
    });

    await newContact.save();

    res.status(201).json({ success: true, message: "Contact submitted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error." });
  }
});

// GET: Fetch all contact submissions
router.get("/all", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: contacts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error." });
  }
});

export default router;
