import { PrismaClient, user, profile } from "@prisma/client";

const prisma = new PrismaClient();

const createNewUser = async (data: user): Promise<user> => {
  const result = await prisma.user.create({
    data,
  });
  return result;
};

const createOrUpdateProfile = async (data: profile): Promise<profile> => {
  const isExist = await prisma.profile.findUnique({
    where: {
      userid: data?.userid,
    },
  });

  if (isExist) {
    const update = await prisma.profile.update({
      where: {
        userid: data?.userid,
      },
      data: {
        bio: data?.bio,
      },
    });
    return update;
  } else {
    const result = await prisma.profile.create({
      data,
    });
    return result;
  }
};

const getAllUsers = async (): Promise<user[]> => {
  const result = await prisma.user.findMany({
    include: {
      profile: true,
    },
  });
  return result;
};

const getSingleUser = async (id: number): Promise<user | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id: id,
    },
    include: {
      profile: true,
    },
  });
  return result;
};

export const userService = {
  createNewUser,
  createOrUpdateProfile,
  getAllUsers,
  getSingleUser,
};
