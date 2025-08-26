require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const { metaData } = require("./config/metaData");

const app = express();

// CORS setup for multiple domains

app.use(cors());

app.use(express.json());
app.get("/", (req, res) => {
  res.send("this is u_tech server v2");
});

// for seo manage
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

app.use("/auth", require("./routes/authRoutes"));
app.use("/chatbot", require("./routes/chatbotRoutes"));
app.use("/share", require("./routes/metaShareRoutes"));
app.use("/jobs", require("./routes/jobRoutes"));
app.use("/bookings", require("./routes/bookingRoutes"));
app.use("/email", require("./routes/subscribeRoutes"));
app.use("/contact", require("./routes/contactRoutes"));

// connectDB();

app.listen(process.env.PORT, () =>
  console.log(` Server running on http://localhost:${process.env.PORT}`)
);
