import axios from "axios";
import { Request, Response, NextFunction } from "express";
import User from "../models/User.model.js";

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = req.headers["authorization"]?.split(" ")[1]; // Get token from Authorization header

  if (!accessToken) {
    res.status(401).json({ message: "Unauthorized: No token provided" });
    return;
  }

  try {
    // Verify the token by fetching user data from GitHub
    const response = await axios.get("https://api.github.com/user", {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    });

    // Check if user exists in your database
    let user = await User.findOne({ githubId: response.data.id });

    if (!user) {
      console.error("User Does not Exist");
      res.status(401).json({ message: "User Does not Exist" });
      return;
    }

    // Attach user data to request object
    // req.user = {
    //   id: user._id.toString(),
    //   username: user.username,
    //   githubId: user.githubId,
    // }; // Store user info in request for later use

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("Error authenticating with GitHub:", error);
    res.status(401).json({ message: "Unauthorized: Invalid token" });
    return;
  }
};

export default authMiddleware;
