"use client";

import Card from "@/components/Card";
import { User, getAuth } from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const revalidate = 0;

const CoursesPage = () => {
  //
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [courses, setCourses] = useState<any>([]);

  useEffect(() => {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    setUser(currentUser);
  }, []);

  useEffect(() => {
    async function getCourses() {
      // if (!user) return;
      const db = getFirestore();

      const q = query(
        collection(db, "courses"),
        where("user", "==", "Bqg2gRgcudYEtwuBwYvKVzRvXmu1")
      );

      const snapshot = await getDocs(q);

      let data: any = [];

      snapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setCourses(data);
    }

    getCourses();
  }, [user]);

  async function deleteCourse(id: string) {
    try {
      const db = getFirestore();

      await deleteDoc(doc(db, "courses", id));
      const newCourses = courses.filter((course: any) => course.id !== id);
      setCourses(newCourses);
    } catch (error) {
      toast.error("Soemthing went wrong");
    }
  }

  return (
    <div className="p-10 ">
      {courses.map((course: any) => {
        return (
          <Card key={course.title}>
            <h1>{course?.title}</h1>
            <h3>{course?.modules} Modules</h3>
            <button
              onClick={() => deleteCourse(course.id)}
              className="btn btn-error"
            >
              Delete
            </button>
          </Card>
        );
      })}
    </div>
  );
};

export default CoursesPage;
