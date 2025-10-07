import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";
import { metaData } from "./config/metaData.js";

// Routes
import authRoutes from "./routes/authRoutes.js";
import chatbotRoutes from "./routes/chatbotRoutes.js";
import metaShareRoutes from "./routes/metaShareRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import subscribeRoutes from "./routes/subscribeRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

// ✅ Import your new user/admin routes
import userRoutes from "./routes/adduserRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import keywordRoutes from "./routes/keywordRoutes.js"
import optimizationRoutes from "./routes/optimizationRoutes.js"

dotenv.config();
const app = express();

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

// DB Connect
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
app.use("/auth", authRoutes);
app.use("/chatbot", chatbotRoutes);
app.use("/share", metaShareRoutes);
app.use("/jobs", jobRoutes);
app.use("/bookings", bookingRoutes);
app.use("/email", subscribeRoutes);
app.use("/contact", contactRoutes);

// ✅ New routes
app.use("/api/users", userRoutes); // <-- your add/get/login users
app.use("/api/admin", adminRoutes); // <-- keep if you want admin-only
app.use("/api/keywords", keywordRoutes);
app.use("/api/optimizations", optimizationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
