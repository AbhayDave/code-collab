import mongoose from "mongoose";
import process from "node:process";

if (process.env.MONGODB_URI) {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));
}else{
    console.error("MongoDB connection URI not found");
}

