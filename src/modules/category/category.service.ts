import { PrismaClient, category } from "@prisma/client";

const prisma = new PrismaClient();

const createCategory = async (data: category): Promise<category> => {
  const result = await prisma.category.create({ data });
  return result;
};

export const categoryService = {
  createCategory,
};
