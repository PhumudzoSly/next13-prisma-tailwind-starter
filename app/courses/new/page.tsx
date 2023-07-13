import { getUser } from "@/actions/user";
import { cookies } from "next/headers";
import React from "react";
import AddCourse from "./AddCourse";

const AddCoursePage = async () => {
  const id = cookies().get("userID")?.value;
  const user = await getUser(id);

  return (
    <div>
      <AddCourse />
    </div>
  );
};

export default AddCoursePage;
