'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { FcGoogle } from 'react-icons/fc'; // Icône Google

export default function GoogleLoginButton() {
  const handleLogin = () => {
    // Tu peux remplacer ceci par ton auth logic
    alert('Connexion avec Google en cours...');
  };

  return (
    <Button
      variant="outline"
      className="w-full flex items-center gap-2 rounded-full"
      onClick={handleLogin}
    >
      <FcGoogle size={20} />
      Se connecter avec Google
    </Button>
  );
}
