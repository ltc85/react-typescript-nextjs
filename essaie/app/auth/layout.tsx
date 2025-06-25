import Image from 'next/image';
import React from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

      <aside className="bg-black flex items-center justify-center p-8 sm:hidden md:flex">
        <Image
          src="/logos_bitcoin.svg" 
          priority={false}
          alt="Logo"
          width={180}
          height={180}
          className="mx-auto"
        />
      </aside>

      <aside className="flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-md">
          {children}
        </div>
      </aside>
    </div>
  );
}
