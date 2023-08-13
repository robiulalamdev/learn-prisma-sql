import { PrismaClient, post } from "@prisma/client";

const prisma = new PrismaClient();

const createPost = async (data: post): Promise<post> => {
  const result = await prisma.post.create({ data });
  return result;
};

const getAllPost = async (options: any): Promise<post[]> => {
  const { orderBy, sortBy, searchTerm, page, limit } = options;
  const skip = parseInt(limit) * parseInt(page) - parseInt(limit);
  const take = parseInt(limit);
  const result = await prisma.post.findMany({
    skip,
    take,
    include: {
      author: true,
      category: true,
    },
    orderBy:
      orderBy && sortBy
        ? {
            [orderBy]: sortBy,
          }
        : { createdAt: "desc" },
    where: {
      OR: [
        {
          title: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
        {
          author: {
            name: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
        },
      ],
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
