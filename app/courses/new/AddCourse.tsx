"use client";
import { createCourse } from "@/actions/courses";
import Button from "@/components/Button";
import Link from "next/link";
import React, { useState } from "react";

const AddCourse = () => {
  //
  const [form, setForm] = useState({
    title: "",
    modules: "",
  });

  //

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
        <Button
          title="Add Course"
          onClick={() => createCourse(form.title, form.modules)}
        />
      </div>
    </div>
  );
};

export default AddCourse;
