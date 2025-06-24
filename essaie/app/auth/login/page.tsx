'use client';

import LoginForm from "@/_components/LoginForm";

import React from "react";

export default function LoginPage() {
  return (
    <form className="flex flex-col gap-4">
      <h2 className="text-2xl text-black font-bold mb-4">Connexion</h2>
      <LoginForm />
    </form>
  );
}