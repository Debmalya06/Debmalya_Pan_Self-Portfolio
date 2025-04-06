const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  businessEmail: { type: String, required: true, unique: true },
  businessPhone: { type: String, required: true },
  companyWebsite: { type: String },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Company", CompanySchema);
