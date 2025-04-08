const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  title: { type: String, required: true },
  category: { type: String, required: true },
  employmentType: { type: String, required: true }, // e.g., Full-time, Part-time
  description: { type: String, required: true },
  location: { type: String, required: true },
  salaryRange: {
    min: { type: Number, required: true },
    max: { type: Number, required: true },
  },
  salaryPeriod: {
    type: String,
    enum: ['yearly', 'Per Month', 'Per Week', 'hourly'], // Add 'Hourly'
    required: true
  },  
  requiredSkills: {
    type: [String],
    default: [],
  },
  applicationDeadline: {
    type: Date,
    required: true,
  },
  applicationMethod: {
    type: String,
    default: "Online",
  },
  aiMatchingEnabled: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Job", jobSchema);
