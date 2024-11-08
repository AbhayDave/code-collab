import axios from "axios";
import User from "../models/User.model.js";
import { Request, Response } from "express";

const githubCallback = async (req: Request, res: Response) => {
  const { code } = req.body;

  try {
    const response = await axios.post(
      `https://github.com/login/oauth/access_token`,
      null,
      {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        },
        headers: {
          accept: "application/json",
        },
      }
    );

    const accessToken = response.data.access_token;

    // Fetch user data using access token
    const userResponse = await axios.get("https://api.github.com/user", {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    });

    // Check if the user already exists in the database
    let user = await User.findOne({ githubId: userResponse.data.id });

    if (!user) {
      // If the user does not exist, create a new record
      user = new User({
        githubId: userResponse.data.id,
        username: userResponse.data.login,
        name: userResponse.data.name,
        email: userResponse.data.email,
        avatar_url: userResponse.data.avatar_url,
      });

      await user.save(); // Save the new user to the database
    }

    res.json({ accessToken, user }); // Send back access token and user data
  } catch (error) {
    console.error("Error during authentication:", error);
    res.status(500).send("Error during authentication");
  }
};


export default { githubCallback };