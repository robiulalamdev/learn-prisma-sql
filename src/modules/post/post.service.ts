import { PrismaClient, post } from "@prisma/client";

const prisma = new PrismaClient();

const createPost = async (data: post): Promise<post> => {
  const result = await prisma.post.create({ data });
  return result;
};

const getAllPost = async (): Promise<post[]> => {
  const result = await prisma.post.findMany({
    include: {
      author: true,
      category: true,
    },
  });
  return result;
};

const getSinglePost = async (id: number): Promise<post | null> => {
  const result = await prisma.post.findUnique({
    where: {
      id: id,
    },
    include: {
      author: true,
      category: true,
    },
  });
  return result;
};

export const postService = {
  createPost,
  getAllPost,
  getSinglePost,
};
