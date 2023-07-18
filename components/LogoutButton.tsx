"use client";
import { getAuth, signOut } from "firebase/auth";
import React from "react";

const LogoutButton = () => {
  const auth = getAuth();
  return (
    <button onClick={() => signOut(auth)} className="bg-red-500 px-5 py-3">
      Sign Out
    </button>
  );
};

export default LogoutButton;
