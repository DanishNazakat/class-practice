const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.token; // cookie se token le rahe
    if (!token) {
      return res.status(401).json({ message: "Access Denied. No Token Found" });
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // id store ho gayi req.user me
    next(); // next middleware / route
  } catch (err) {
    return res.status(401).json({ message: "Invalid or Expired Token" });
  }
};

module.exports = verifyToken;
