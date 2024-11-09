import mongoose from "mongoose";

const WorkspaceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }, // Reference to the user who owns the workspace
  createdAt: { type: Date, default: Date.now }, // Timestamp for when the workspace was created
});

const Workspace = mongoose.model("Workspace", WorkspaceSchema);

export default Workspace;
