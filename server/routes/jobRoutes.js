const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddlewares");
const { postJob } = require("../controllers/jobController");

router.post("/", auth, postJob);

module.exports = router;
