"use client"

import React from 'react';
import LoginButton from './LoginButton';
import Input from './Input';

export default function LoginForm() {
  return (
    <form className="flex flex-col gap-4">
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Mot de passe" />

      <LoginButton />
    </form>
  );
}
