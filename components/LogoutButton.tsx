"use client";
import { logOut } from "@/actions/user";
import React from "react";

const LogoutButton = () => {
  return (
    <button onClick={() => logOut()} className="bg-red-500 px-5 py-3">
      Sign Out
    </button>
  );
};

export default LogoutButton;
