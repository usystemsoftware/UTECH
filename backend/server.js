require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// CORS setup for multiple domains
const allowedOrigins = process.env.FRONTEND_ORIGINS.split(',');

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin.trim())) {
      callback(null, true);
    } else {
      console.warn(`CORS blocked request from: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use(express.json());

app.use('/auth', require('./routes/authRoutes'));
app.use('/chatbot', require('./routes/chatbotRoutes'));

connectDB();

app.listen(process.env.PORT, () => console.log(` Server running on port ${process.env.PORT}`));
