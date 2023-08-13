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

const getAllPost = async (req: Request, res: Response) => {
  try {
    const result = await postService.getAllPost(req.query);
    res.status(200).json({
      success: true,
      message: "Posts Retrieve Successful",
      total: result.total,
      data: result.data,
    });
  } catch (error: any) {
    res.status(201).json({
      success: false,
      message: error.message,
    });
  }
};
const getSinglePost = async (req: Request, res: Response) => {
  try {
    const result = await postService.getSinglePost(parseInt(req.params.id));
    res.status(200).json({
      success: true,
      message: "Post Retrieve Successful",
      data: result,
    });
  } catch (error: any) {
    res.status(201).json({
      success: false,
      message: error.message,
    });
  }
};

const updatePost = async (req: Request, res: Response) => {
  try {
    const result = await postService.updatePost(
      parseInt(req.params.id),
      req.body
    );
    res.status(200).json({
      success: true,
      message: "Post Updated Successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(201).json({
      success: false,
      message: error.message,
    });
  }
};
const deletePost = async (req: Request, res: Response) => {
  try {
    const result = await postService.deletePost(parseInt(req.params.id));
    res.status(200).json({
      success: true,
      message: "Post Deleted Successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(201).json({
      success: false,
      message: error.message,
    });
  }
};
const learnAggregateAndGrouping = async (req: Request, res: Response) => {
  try {
    const result = await postService.learnAggregateAndGrouping();
    res.status(200).json({
      success: true,
      message: "Post Date Get Successfully",
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
  getAllPost,
  getSinglePost,
  updatePost,
  deletePost,
  learnAggregateAndGrouping,
};
