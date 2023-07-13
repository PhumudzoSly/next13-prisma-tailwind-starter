import React from "react";
import { getUser } from "@/actions/user";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AuthForm from "@/components/AuthForm";
import { prismaClient } from "@/prisma/prisma";

const HomePage = async () => {
  const id = cookies().get("userID")?.value;

  if (!id) return <AuthForm />;

  const user = await prismaClient.user.findUnique({
    where: {
      id,
    },
  });

  if (user) return redirect("/courses");

  return <AuthForm />;
};

export default HomePage;
