'use client';

import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded-md font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
