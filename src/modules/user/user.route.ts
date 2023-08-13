import express from "express";
import { userController } from "./user.controller";
const router = express.Router();

router.post("/create-user", userController.createUser);
router.post("/profile", userController.addProfileInfo);
router.get("/", userController.getAllUsers);

export const userRoutes = router;
