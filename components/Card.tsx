import React, { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
  return <div className="bg-gray-900 rounded-xl p-4 mb-4">{children}</div>;
};

export default Card;
