"use server";

import { prismaClient } from "@/prisma/prisma";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createCourse(title: string, modules: string) {
  const id = cookies().get("userID")?.value!;
  const course = await prismaClient.course.create({
    data: {
      userID: id,
      title: title,
      modules: parseInt(modules),
      createdAt: new Date(),
    },
  });

  revalidatePath("/courses");
  redirect("/courses");
}

