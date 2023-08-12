import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    const getAllUsers = await prisma.user.findMany();
    console.log(getAllUsers);
}