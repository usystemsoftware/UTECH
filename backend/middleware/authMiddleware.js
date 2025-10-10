import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Protect routes
const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id).select("-password");
      if (!user) return res.status(401).json({ message: "User not found" });
      req.user = user;
      next();
    } catch (err) {
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    res.status(401).json({ message: "No token provided" });
  }
};

// Role-based access
export const authorizeRoles = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: "Forbidden: Insufficient role" });
  }
  next();
};

// Domain/folder access
export const authorizeDomain = (client, platform) => (req, res, next) => {
  const hasAccess = req.user.domains.some(
    d => d.client === client && d.platform === platform
  );
  if (!hasAccess) return res.status(403).json({ message: "Forbidden: No access to this folder" });
  next();
};

export default protect;
