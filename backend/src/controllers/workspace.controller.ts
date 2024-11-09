import Membership from "../models/Membership.model.js";
import Workspace from "../models/Workspace.model.js";
import { Request, Response } from "express";


// Create a new workspace
export const createWorkspace = async (req: Request, res: Response) => {
  const { name, description } = req.body;
  
  // const ownerId = req.user?.id; // Assuming you have middleware that sets req.user

  res.send("working");

  // try {
  //   const workspace = new Workspace({ name, description, ownerId });
  //   await workspace.save();

  //   // Add the creator as a member of the workspace
  //   const membership = new Membership({
  //     userId: ownerId,
  //     workspaceId: workspace._id,
  //     role: "owner",
  //   });
  //   await membership.save();

  //   res.status(201).json(workspace);
  // } catch (error) {
  //   console.error("Error creating workspace:", error);
  //   res.status(500).send("Server error");
  // }
};

// Get all workspaces for a user
// export const getUserWorkspaces = async (req: Request, res: Response) => {
//   const userId = req.user?.id; // Assuming you have middleware that sets req.user

//   try {
//     const memberships = await Membership.find({ userId }).populate(
//       "workspaceId"
//     );
//     const workspaces = memberships.map((m) => m.workspaceId);

//     res.json(workspaces);
//   } catch (error) {
//     console.error("Error fetching workspaces:", error);
//     res.status(500).send("Server error");
//   }
// };
