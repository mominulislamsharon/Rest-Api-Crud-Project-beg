import express, { Application } from "express";
import ConnectDB from "./config/database";
import userRoutes from "./routes/userRoutes";

const app: Application = express();

// connect to database
ConnectDB();

// middleware

app.use(express.json());

// routes
app.use("/api/users", userRoutes);

export default app;
