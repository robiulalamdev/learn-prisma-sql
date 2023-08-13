import { PrismaClient, post } from "@prisma/client";

const prisma = new PrismaClient();

const createPost = async (data: post): Promise<post> => {
  const result = await prisma.post.create({ data });
  return result;
};

export const postService = {
  createPost,
};
