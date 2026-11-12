import dotenv from "dotenv";
dotenv.config();

// Default secrets if not set in environment
process.env.JWT_SECRET = process.env.JWT_SECRET || "eduplus_jwt_secret_key_2025";

import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import backend routes and DB connector
import connectDB from "./server/config/db.js";
import authRoutes from "./server/routes/authRoutes.js";
import studentRoutes from "./server/routes/studentRoutes.js";
import staffRoutes from "./server/routes/staffRoutes.js";
import attendanceRoutes from "./server/routes/attendanceRoutes.js";
import staffAttendanceRoutes from "./server/routes/staffAttendanceRoutes.js";
import feeRoutes from "./server/routes/feeRoutes.js";
import marksRoutes from "./server/routes/marksRoutes.js";
import examRoutes from "./server/routes/examRoutes.js";
import noticeRoutes from "./server/routes/noticeRoutes.js";
import timetableRoutes from "./server/routes/timetableRoutes.js";
import materialRoutes from "./server/routes/materialRoutes.js";
import dashboardRoutes from "./server/routes/dashboardRoutes.js";
import eventRoutes from "./server/routes/eventRoutes.js";

async function startServer() {
  const app = express();

  // Connect to DB (or initialize in-memory fallback)
  await connectDB();

  // Basic Middleware
  app.use(cors());
  app.use(express.json({ limit: "10mb" }));
  app.use(express.urlencoded({ extended: true, limit: "10mb" }));

  // API Health Check
  app.get("/api/health", (req, res) => {
    res.json({
      status: "OK",
      message: "Schlar API is running 🚀",
      timestamp: new Date().toISOString(),
    });
  });

  // Mount Schlar API routes
  app.use("/api/auth", authRoutes);
  app.use("/api/students", studentRoutes);
  app.use("/api/staff", staffRoutes);
  app.use("/api/attendance", attendanceRoutes);
  app.use("/api/staff-attendance", staffAttendanceRoutes);
  app.use("/api/fees", feeRoutes);
  app.use("/api/marks", marksRoutes);
  app.use("/api/exams", examRoutes);
  app.use("/api/notices", noticeRoutes);
  app.use("/api/timetable", timetableRoutes);
  app.use("/api/materials", materialRoutes);
  app.use("/api/dashboard", dashboardRoutes);
  app.use("/api/events", eventRoutes);

  const isProduction = process.env.NODE_ENV === "production";
  const PORT = 3000;

  if (!isProduction) {
    // Mount Vite dev middleware
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        host: "0.0.0.0",
        port: PORT,
        hmr: process.env.DISABLE_HMR !== "true",
        watch: process.env.DISABLE_HMR === "true" ? null : {},
      },
      appType: "spa",
    });

    app.use(vite.middlewares);
  } else {
    // In production, serve dist folder
    app.use(express.static(path.resolve(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🎓 Schlar School ERP server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
