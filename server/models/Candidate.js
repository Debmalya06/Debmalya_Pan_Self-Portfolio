const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  resumeUrl: { type: String }, // <-- New field
});

module.exports = mongoose.model("Candidate", CandidateSchema);
