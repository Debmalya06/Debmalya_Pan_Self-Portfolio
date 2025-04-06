import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js"; // Ensure the file extension is .js

// Import routes
import authRoutes from "./routes/authRoutes.js";
import candidateRoutes from "./routes/candidateRoutes.js";
import companyRoutes from "./routes/companyRoutes.js";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/candidate", candidateRoutes);
app.use("/api/company", companyRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
