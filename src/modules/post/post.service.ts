import { PrismaClient, post } from "@prisma/client";

const prisma = new PrismaClient();

const createPost = async (data: post): Promise<post> => {
  const result = await prisma.post.create({ data });
  return result;
};

const getAllPost = async (options: any): Promise<post[] | any> => {
  const { orderBy, sortBy, searchTerm, page, limit } = options;
  const skip = parseInt(limit) * parseInt(page) - parseInt(limit) || 0;
  const take = parseInt(limit) || 10;

  return await prisma.$transaction(async (tx) => {
    const result = await tx.post.findMany({
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

    const total = await tx.post.count();
    return { data: result, total: total };
  });
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

const updatePost = async (
  id: number,
  payload: Partial<post>
): Promise<post | number> => {
  //   const result = await prisma.post.update({
  //     where: {
  //       id: id,
  //     },
  //     data: payload,
  //   });

  const result =
    await prisma.$executeRaw`update post set title = ${payload.title} where id = ${id}`;

  return result;
};

const deletePost = async (id: number): Promise<post> => {
  const result = await prisma.post.delete({
    where: {
      id: id,
    },
  });
  return result;
};
const learnAggregateAndGrouping = async () => {
  //   const result = await prisma.post.aggregate({
  //     _avg: {
  //       authorId: true,
  //       categoryId: true,
  //     },
  //     _sum: {
  //       id: true,
  //     },
  //     _count: {
  //       id: true,
  //     },
  //   });

  const result = await prisma.post.groupBy({
    by: ["title"],
    _count: {
      title: true,
    },
  });

  return result;
};

export const postService = {
  createPost,
  getAllPost,
  getSinglePost,
  updatePost,
  deletePost,
  learnAggregateAndGrouping,
};
