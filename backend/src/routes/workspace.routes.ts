import { Router } from "express";
import { createWorkspace } from "../controllers/workspace.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/", authMiddleware, createWorkspace); // Create a new workspace
// router.get('/', authMiddleware, workspaceController.getUserWorkspaces); // Get all workspaces for a user

export default router;
