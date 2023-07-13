"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { createUser, loginUser } from "@/actions/user";
import { toast } from "react-toastify";

const AuthForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signUp = async () => {
    if (!form.email || !form.password) {
      return;
    } else {
      try {
        setLoading(true);
        await createUser(form.email, form.password);
        setLoading(false);
        toast.success("User created successfully");
      } catch (error) {
        toast.error("Error creating user");
        setLoading(false);
      }
    }
  };
  const signIn = async () => {
    if (!form.email || !form.password) {
      return;
    } else {
      try {
        setLoading(true);
        await loginUser(form.email, form.password);
        setLoading(false);
        toast.success("User logged in successfully");
      } catch (error) {
        console.log(error);
        toast.error("Error while logging in");
        setLoading(false);
      }
    }
  };

  return (
    <div className="mx-auto py-10 w-full max-w-md">
      <div className="bg-gray-900 px-3 py-10 rounded-2xl">
        <h3 className="text-center text-3xl font-bold mb-4">Please Login</h3>

        <input
          type="text"
          className="border border-gray-400 p-2 w-full bg-transparent mb-4"
          placeholder="Email address"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <input
          type="password"
          className="border border-gray-400 p-2 w-full bg-transparent mb-4"
          placeholder="*******"
          value={form.password}
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
        />

        <Button title="Sign In" onClick={() => signIn()} loading={loading} />
        <br />
        <Button title="Sign Up" onClick={() => signUp()} loading={loading} />
      </div>
    </div>
  );
};

export default AuthForm;
