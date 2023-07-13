"use client";
import React from "react";

type ButtonProps = {
  onClick: () => void;
  title: string;
  loading?: boolean;
};

const Button = ({ loading, onClick, title }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="px-16 py-3 w-full rounded-lg bg-teal-600 mb-3"
    >
      {loading ? "Loading..." : title}
    </button>
  );
};

export default Button;
