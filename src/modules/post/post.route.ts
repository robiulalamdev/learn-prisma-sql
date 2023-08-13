import express from "express";
import { postController } from "./post.controller";

const router = express.Router();

router.post("/create-post", postController.createPost);
router.get("/", postController.getAllPost);
router.get("/:id", postController.getSinglePost);
router.patch("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);
router.get("/learn-query/aggregate", postController.learnAggregateAndGrouping);

export const postRoutes = router;
