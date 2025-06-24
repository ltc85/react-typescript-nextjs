import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className = '', ...props }: InputProps) {
  return (
    <input
      className={`border border-gray-300 px-4 py-2 rounded-full text-black ${className}`}
      {...props}
    />
  );
}
