import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";

// routes
import userRoutes from "./routes/userRoutes.js";
import turfRoutes from "./routes/turfRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const PORT = process.env.PORT || 3000;

app.use("/api/users", userRoutes);
app.use("/api/turfs", turfRoutes);

app.get("/", (req, res) => res.send("server is on"));
app.listen(PORT, () =>
  console.log(`🚀 Server is running on http://localhost:${PORT}`)
);