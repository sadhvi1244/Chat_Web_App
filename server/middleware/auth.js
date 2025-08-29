import jwt from "jsonwebtoken";
import User from "../models/userModels.js";

// Middleware to protect routes
export const protectRoute = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"]; // "Bearer <token>"
    if (!authHeader) {
      return res
        .status(401)
        .json({ success: false, message: "Not authorized, no token" });
    }

    const token = authHeader.split(" ")[1]; // Extract token after "Bearer"
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid token format" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    req.user = user; // attach user to request
    next();
  } catch (error) {
    console.log(error.message);
    return res
      .status(401)
      .json({ success: false, message: "Not authorized, token failed" });
  }
};
