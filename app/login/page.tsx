"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const AuthForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const auth = getAuth();

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signUp = async () => {
    if (!form.email || !form.password) {
      return;
    } else {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      console.log("SING UP USER", user);
    }
  };

  const signIn = async () => {
    if (!form.email || !form.password) {
      return;
    } else {
      const { user } = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      console.log("SING IN USER", user);
    }
  };

  const googleAuth = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const { user } = await signInWithPopup(auth, provider);
      console.log("USER", user);
    } catch (error) {
      toast.error("Something went wrong, please try again");
    }
  };

  async function resetPassword() {
    await sendPasswordResetEmail(auth, form.email);
  }

  return (
    <div className="mx-auto py-10 w-full max-w-md">
      <div className="bg-gray-900 px-3 py-10 rounded-2xl">
        <h3 className="text-center text-3xl font-bold mb-5">Hello John</h3>
        <button onClick={googleAuth} className="btn btn-primary mb-10 w-full">
          Sign In With Google
        </button>

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
        <br />
        <button className="btn btn-secondary w-full" onClick={resetPassword}>
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
