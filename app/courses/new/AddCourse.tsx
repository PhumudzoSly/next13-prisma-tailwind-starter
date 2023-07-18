"use client";
import Button from "@/components/Button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";
import { User, getAuth } from "firebase/auth";

const AddCourse = ({ userID }: { userID: string | undefined }) => {
  //
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    console.log("USER", user);
    setUser(currentUser);
  }, []);

  const [form, setForm] = useState({
    title: "",
    modules: "",
  });

  //

  async function AddCourse() {
    //
    const db = getFirestore();
    if (!user) {
      toast.error("USer not found");
      return;
      //
    }

    try {
      const course = await addDoc(collection(db, "courses"), {
        title: form.title,
        modules: form.modules,
        user: "Bqg2gRgcudYEtwuBwYvKVzRvXmu1",
      });

      toast.success("Course added successfully");

      //
    } catch (error) {
      console.log("ERROR", error);
      toast.error("Error adding course");
    }
  }

  return (
    <div className="my-10 w-full  max-w-xl mx-auto">
      <Link href="/courses">Go Back</Link>

      <div className="w-full flex flex-col gap-5 max-w-xl mx-auto bg-gray-700 text-white my-4 p-5">
        <input
          value={form.title}
          onChange={(e) =>
            setForm({
              ...form,
              title: e.target.value,
            })
          }
          className="border border-gray-400 p-2 w-full bg-transparent mb-4"
        />
        <input
          value={form.modules}
          onChange={(e) =>
            setForm({
              ...form,
              modules: e.target.value,
            })
          }
          className="border border-gray-400 p-2 w-full bg-transparent mb-4"
        />
        <Button title="Add Course" onClick={AddCourse} />
      </div>
    </div>
  );
};

export default AddCourse;
