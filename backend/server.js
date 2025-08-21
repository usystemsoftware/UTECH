require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// CORS setup for multiple domains

app.use(cors());

app.use(express.json());
app.get('/', (req, res) => {
  res.send("this is u_tech server v1")
})

app.use('/auth', require('./routes/authRoutes'));
app.use('/chatbot', require('./routes/chatbotRoutes'));
app.use('/share', require('./routes/metaShareRoutes'))

// connectDB();

app.listen(process.env.PORT, () => console.log(` Server running on http://localhost:${process.env.PORT}`));
