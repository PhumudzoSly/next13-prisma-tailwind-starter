"use client";
import React from "react";
import { initializeApp, getApp, getApps } from "firebase/app";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const firebaseConfig = {
    apiKey: "AIzaSyDdrliLLqDAsVREHDJv95MmtqluijHSUCw",
    authDomain: "poe-app-d6c03.firebaseapp.com",
    projectId: "poe-app-d6c03",
    storageBucket: "poe-app-d6c03.appspot.com",
    messagingSenderId: "143645288387",
    appId: "1:143645288387:web:a8934f703532a3bc2abf76",
  };

  // Initialize Firebase
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

  return <div>{children}</div>;
};

export default Provider;
