"use server";
import { prismaClient } from "@/prisma/prisma";
import { cookies } from "next/headers";
import bcypt from "bcrypt";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function getUser(id: string | undefined) {
  if (!id) return redirect("/");
  const user = await prismaClient.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) return redirect("/");

  return user;
}

export async function createUser(email: string, password: string) {
  //
  const oldUser = await prismaClient.user.findUnique({
    where: {
      email,
    },
  });

  if (oldUser) throw new Error("User already exists");

  const hashedPassword = await bcypt.hash(password, 12);

  const newUser = await prismaClient.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });
  cookies().set("userID", newUser.id);
  return newUser;
}

export async function loginUser(email: string, password: string) {
  const user = await prismaClient.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) throw new Error("User not found");

  const res = await bcypt.compare(password, user?.password);
  if (res) {
    cookies().set("userID", user.id);
    return user;
  } else throw new Error("Incorrect password");
}

export async function deleteUser(id: string) {
  await prismaClient.user.delete({
    where: {
      id,
    },
  });
}

export async function updateUser(data: any) {
  await prismaClient.user.update({
    where: {
      id: data?.id,
    },
    data: {
      ...data,
    },
  });
}

export async function logOut() {
  cookies().delete("userID");
  revalidatePath("/courses");
}
