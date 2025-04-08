const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");

// OR use a controller if defined
// const { uploadCV } = require("../controllers/cvController");

router.post("/upload-cv", upload.single("cv"), (req, res) => {
  console.log("✅ CV Upload hit");
  res.json({ message: "Upload successful" });
});

module.exports = router;
