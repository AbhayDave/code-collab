import { Router } from "express";
import authController from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/github/callback", authController.githubCallback);

export default authRouter;