const cloudinary = require('cloudinary').v2;
const dotenv = require("dotenv");

dotenv.config(); // Make sure env vars are loaded

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,       // ✅ correct
  api_key: process.env.CLOUDINARY_API_KEY,             // ✅ correct
  api_secret: process.env.CLOUDINARY_API_SECRET        // ✅ correct
});

module.exports = cloudinary;
