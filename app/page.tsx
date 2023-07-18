"use client";
import React from "react";
import AuthForm from "@/components/AuthForm";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Hello, Welcome to the app</h1>
      <Link href={"/login"} className="btn btn-secondary">
        Sign In to Continue
      </Link>
    </div>
  );
};

export default HomePage;
