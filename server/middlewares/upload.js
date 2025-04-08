const multer = require('multer');
const storage = multer.memoryStorage(); // store in memory for cloudinary
const upload = multer({ storage });

module.exports = upload;
