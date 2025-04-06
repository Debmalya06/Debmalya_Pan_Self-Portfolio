const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Candidate = require("../models/Candidate");
const Company = require("../models/Company");

const registerCandidate = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password } = req.body;
    let candidate = await Candidate.findOne({ email });
    if (candidate) return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    candidate = new Candidate({ firstName, lastName, email, phone, password: hashedPassword });
    await candidate.save();

    res.status(201).json({ message: "Candidate registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const registerCompany = async (req, res) => {
  try {
    const { companyName, businessEmail, businessPhone, companyWebsite, password } = req.body;
    let company = await Company.findOne({ businessEmail });
    if (company) return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    company = new Company({ companyName, businessEmail, businessPhone, companyWebsite, password: hashedPassword });
    await company.save();

    res.status(201).json({ message: "Company registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password, userType } = req.body;
    let user;
    
    if (userType === "candidate") {
      user = await Candidate.findOne({ email });
    } else if (userType === "company") {
      user = await Company.findOne({ businessEmail: email });
    }

    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, userType }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { registerCandidate, registerCompany, login };
