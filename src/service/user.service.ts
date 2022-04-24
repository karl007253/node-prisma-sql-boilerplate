import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser() {
  const res = await prisma.user.create({
    data: {
      email: "superidol@test.com",
      status: 1,
      type: {
        create: {
          name: "Song Leader",
        },
      },
      profile: {
        create: {
          firstname: "Super",
          middlename: "Wedchombawn",
          lastname: "Idol",
          bio: "Very gud very nice...",
          dob: new Date("1997-00-08"),
        },
      },
    },
  });

  return res;
}

export async function getUsers() {
  return await prisma.user.findMany({
    include: {
      profile: true,
      type: true,
    },
  });
}

export async function getUserById(userId: any) {
  return await prisma.user.findUnique({
    where: {
      id: parseInt(userId),
    },
    include: {
      profile: true,
      type: true,
    },
  });
}
