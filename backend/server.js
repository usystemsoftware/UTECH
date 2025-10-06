require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const { metaData } = require("./config/metaData");

const app = express();

// CORS setup
app.use(cors());
app.use(express.json());

// Connect to DB
connectDB();

// Root check
app.get("/", (req, res) => {
  res.send("this is u_tech server v2");
});

// ✅ SEO sitemap
app.get("/sitemap.xml", (req, res) => {
  res.header("Content-Type", "application/xml");
  const urls = Object.values(metaData)
    .map(
      (data) => `
      <url>
        <loc>${data.url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `
    )
    .join("");

  res.send(`  
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>
  `);
});

// ✅ Existing routes
app.use("/auth", require("./routes/authRoutes"));
app.use("/chatbot", require("./routes/chatbotRoutes"));
app.use("/share", require("./routes/metaShareRoutes"));
app.use("/jobs", require("./routes/jobRoutes"));
app.use("/bookings", require("./routes/bookingRoutes"));
app.use("/email", require("./routes/subscribeRoutes"));
app.use("/contact", require("./routes/contactRoutes"));

// ✅ NEW: Admin routes (Register, Login, etc.)
app.use("/api/admin", require("./routes/adminRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
