const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    if (!req || !res) {
      throw new Error("Request or Response object is missing."); // Debugging step
    }

    const authHeader = req.headers?.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "No token provided." });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Invalid token format." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error.message);
    if (res && typeof res.status === "function") {
      return res.status(403).json({ message: "Invalid or expired token." });
    } else {
      console.error("Response object is missing or invalid.");
    }
  }
};



