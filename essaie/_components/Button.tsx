'use client';

import React from "react";

type ButtonProps =  React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button({ children, className = "bg-orange-400", ...props }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded-full font-semibold text-white bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 hover:bg-green-700 transition-colors duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
