'use client';

// Update the import path below to the correct relative path if needed
import { Input } from "../components/ui/input";
import LoginButton from './LoginButton';
import GoogleLoginButton from './GoogleLoginButton';

export default function LoginForm() {
  return (
    <form className="flex flex-col gap-4 rounded-2xl bg-white p-8 shadow-lg shadow-black/10 w-full max-w-sm mx-auto">
      <h2 className="text-xl font-semibold">Connexion</h2>
      <Input type="email" placeholder="Email" className="rounded-full" />
      <Input type="password" placeholder="Mot de passe" className="rounded-full" />
      <LoginButton />
      <p className="text-center">ou</p>
      <GoogleLoginButton />
      <p className="text-center text-sm text-gray-500">
        Pas de compte ? <a href="/auth/register" className="text-amber-500 hover:underline">Créer un compte</a>
      </p>
    </form>
  );
}
