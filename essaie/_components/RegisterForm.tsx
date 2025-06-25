"use client";
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import RegisterButton from './RegisterButton';
import GoogleRegisterButton from './GoogleRegisterButton';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de création de compte ici (API, Firebase, etc.)
    alert(`Compte créé pour ${email}`);
  };


  return (
    <form
      onSubmit={handleRegister}
      className="flex flex-col gap-4 rounded-2xl bg-white p-8 shadow-lg shadow-black/10 w-full max-w-sm mx-auto"
    >
      <h2 className="text-xl font-semibold">Créer un compte</h2>
        <Input
        type="text"
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="rounded-full"
      />

      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-full"
      />

      <Input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="rounded-full"
      />

      <Input
        type="password"
        placeholder="Confirmez Mot de passe"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="rounded-full"
      />

      <RegisterButton />

      <div className="text-center text-sm text-gray-500">ou</div>

      <GoogleRegisterButton />
      <p className="text-center text-sm text-gray-500">
      Vous avez déjà un compte ? <a href="/auth/login" className="text-amber-500">Se connecter</a>
      </p>
    </form>
    
  );
}
