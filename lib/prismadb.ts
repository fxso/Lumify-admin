import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined
};

const prismadb = globalThis.prisma || new PrismaClient();

//Prevents NEXTJS 13 hot reloading to create multiple prisma instances
if(process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;