import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  githubId: { type: String, required: true, unique: true },
  username: { type: String },
  name: { type: String },
  email: { type: String },
  avatar_url: { type: String },
});

const User = mongoose.model("User", UserSchema);

export default User;