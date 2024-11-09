import express from "express";
import cors from "cors";
import "dotenv/config.js";
import "./db/dbConfig.js"
import authRouter from "./routes/auth.routes.js";
import workspaceRouter from "./routes/workspace.routes.js";


const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/workspace", workspaceRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
