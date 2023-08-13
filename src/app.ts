import express, { Application } from "express";
import cors from "cors";
import { userRoutes } from "./modules/user/user.route";
import { categoryRoutes } from "./modules/category/category.route";
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/category", categoryRoutes);

export default app;
