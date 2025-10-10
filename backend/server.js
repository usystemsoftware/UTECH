import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";
import { metaData } from "./config/metaData.js";

/* =======================
   ✅ Import Routes
======================= */
import authRoutes from "./routes/authRoutes.js";
import chatbotRoutes from "./routes/chatbotRoutes.js";
import metaShareRoutes from "./routes/metaShareRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import subscribeRoutes from "./routes/subscribeRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

// Newly integrated user/admin routes
import addUserRoutes from "./routes/adduserRoutes.js";   // Add User API (with deadline)
import adminRoutes from "./routes/adminRoutes.js";
import keywordRoutes from "./routes/keywordRoutes.js";
import optimizationRoutes from "./routes/optimizationRoutes.js";

// Image API routes
import userRoutes from "./routes/userRoutes.js";      // Backend user management
import imageRoutes from "./routes/imageRoutes.js";    // Image upload & folder access

/* =======================
   ✅ Server Setup
======================= */
dotenv.config();
const app = express();

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

/* =======================
   ✅ Database Connection
======================= */
connectDB();

/* =======================
   ✅ Root Route
======================= */
app.get("/", (req, res) => {
  res.send("🚀 u_tech server v2 is running successfully");
});

/* =======================
   ✅ Sitemap (SEO)
======================= */
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

/* =======================
   ✅ API Routes
======================= */
// Old routes
app.use("/auth", authRoutes);
app.use("/chatbot", chatbotRoutes);
app.use("/share", metaShareRoutes);
app.use("/jobs", jobRoutes);
app.use("/bookings", bookingRoutes);
app.use("/email", subscribeRoutes);
app.use("/contact", contactRoutes);

// Admin/User routes
app.use("/api/users", addUserRoutes); // Add User API (create, get, delete)
app.use("/api/admin", adminRoutes);
app.use("/api/keywords", keywordRoutes);
app.use("/api/optimizations", optimizationRoutes);

// New backend routes
app.use("/api/users-backend", userRoutes);   // User management backend
app.use("/api/images", imageRoutes);         // Image/folder access

/* =======================
   ✅ Start Server
======================= */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
