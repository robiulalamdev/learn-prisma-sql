import { Request, Response } from "express";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.createNewUser(req.body);
    res.status(200).json({
      success: true,
      message: "User Create Successful",
      data: result,
    });
  } catch (error: any) {
    res.status(201).json({
      success: false,
      message: error.message,
    });
  }
};

const addProfileInfo = async (req: Request, res: Response) => {
  try {
    const result = await userService.createOrUpdateProfile(req.body);
    res.status(200).json({
      success: true,
      message: "User Profile Update Successful",
      data: result,
    });
  } catch (error: any) {
    res.status(201).json({
      success: false,
      message: error.message,
    });
  }
};
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userService.getAllUsers();
    res.status(200).json({
      success: true,
      message: "Users Retrieve Successful",
      data: result,
    });
  } catch (error: any) {
    res.status(201).json({
      success: false,
      message: error.message,
    });
  }
};
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getSingleUser(parseInt(req.params.id));
    res.status(200).json({
      success: true,
      message: "User Retrieve Successful",
      data: result,
    });
  } catch (error: any) {
    res.status(201).json({
      success: false,
      message: error.message,
    });
  }
};

export const userController = {
  createUser,
  addProfileInfo,
  getAllUsers,
  getSingleUser,
};
