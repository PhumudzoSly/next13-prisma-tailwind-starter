"use client";
import React, { useEffect, useState } from "react";
import { User, getAuth } from "firebase/auth";
import AddCourse from "../courses/new/AddCourse";

const ClientPage = () => {
  //
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    console;
    setUser(currentUser);
  }, []);

  return (
    <div className="p-10">
      <h1>Name: {user?.displayName}</h1>
      <AddCourse userID={user?.uid} />
    </div>
  );
};

export default ClientPage;
