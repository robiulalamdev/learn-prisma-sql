import { Request, Response } from "express";
import { postService } from "./post.service";

const createPost = async (req: Request, res: Response) => {
  try {
    const result = await postService.createPost(req.body);
    res.status(200).json({
      success: true,
      message: "Post Create Successful",
      data: result,
    });
  } catch (error: any) {
    res.status(201).json({
      success: false,
      message: error.message,
    });
  }
};

export const postController = {
  createPost,
};
