import mongoose from "mongoose";

const MembershipSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the user
  workspaceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Workspace",
    required: true,
  }, // Reference to the workspace
  role: { type: String, enum: ["owner", "member"], default: "member" }, // Role of the user in the workspace
  joinedAt: { type: Date, default: Date.now }, // Timestamp for when the user joined the workspace
});

const Membership = mongoose.model("Membership", MembershipSchema);

export default Membership;
