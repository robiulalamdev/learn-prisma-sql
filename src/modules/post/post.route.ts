import express from "express";
import { postController } from "./post.controller";

const router = express.Router();

router.post("/create-post", postController.createPost);
router.get("/", postController.getAllPost);
router.get("/:id", postController.getSinglePost);

export const postRoutes = router;
