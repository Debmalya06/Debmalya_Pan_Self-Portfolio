const express = require("express");
const { registerCandidate, registerCompany, login } = require("../controllers/authController");

const router = express.Router();

router.post("/register/candidate", registerCandidate);
router.post("/register/company", registerCompany);
router.post("/login", login);

module.exports = router;
