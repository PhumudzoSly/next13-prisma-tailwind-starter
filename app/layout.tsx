"use client";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const revalidate = 0;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <main>
            <ToastContainer
              autoClose={3000}
              position="bottom-center"
              theme="dark"
            />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
