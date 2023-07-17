"use client";
import React from "react";
import { getUser } from "@/actions/user";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AuthForm from "@/components/AuthForm";
import { prismaClient } from "@/prisma/prisma";

const HomePage = () => {
  return <AuthForm />;
};

export default HomePage;
