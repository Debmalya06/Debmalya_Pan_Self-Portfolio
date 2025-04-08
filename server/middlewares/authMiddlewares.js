const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token || !token.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Access Denied: No token provided" });
  }

  try {
    const actualToken = token.split(" ")[1];
    const verified = jwt.verify(actualToken, process.env.JWT_SECRET);
    req.user = verified; // contains the user ID
    next();
  } catch (error) {
    console.error("JWT Error:", error.message);
    res.status(400).json({ message: "Invalid Token" });
  }
};

module.exports = authMiddleware;
