import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

// Import routes
import authRoutes from "./routes/authRoutes.js";
import candidateRoutes from "./routes/candidateRoutes.js";
import companyRoutes from "./routes/companyRoutes.js";
import cvRoutes from "./routes/cvRoutes.js";
import jobRoutes from "./routes/jobRoutes.js"; // ✅ ADD THIS

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/candidate", candidateRoutes);
app.use("/api/company", companyRoutes);
app.use("/api/cv", cvRoutes);
app.use("/api/jobs", jobRoutes); // ✅ ADD THIS

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // ✅ FIXED TEMPLATE STRING
