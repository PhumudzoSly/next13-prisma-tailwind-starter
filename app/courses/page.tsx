import { getUser } from "@/actions/user";
import Button from "@/components/Button";
import LogoutButton from "@/components/LogoutButton";
import { prismaClient } from "@/prisma/prisma";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const CoursesPage = async () => {
  //
  const id = cookies().get("userID")?.value;
  const user = await getUser(id);

  const courses = await prismaClient.course.findMany({
    where: {
      userID: id,
    },
  });

  return (
    <div className="w-full mx-auto max-w-7xl p-4">
      <div className="flex gap-5 justify-between items-center mb-5">
        <h1>My Courses</h1>
        <div className="flex items-center gap-4">
          <Link href="/courses/new" className="px-14 py-3 bg-blue-600">
            Create Course
          </Link>
          <LogoutButton />
        </div>
      </div>
      <ul>
        {courses.map((course) => {
          return (
            <li
              key={course.id}
              className="px-5 py-2 bg-gray-800 border border-gray-700"
            >
              <h1>{course.title}</h1>
              <h3>{course.modules} Modules</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CoursesPage;
