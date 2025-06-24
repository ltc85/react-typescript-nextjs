'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { FcGoogle } from 'react-icons/fc';

export default function GoogleRegisterButton() {
  const handleRegisterWithGoogle = () => {
    // Logique d'inscription via Google (OAuth)
    alert("Inscription avec Google en cours...");
  };

  return (
    <Button
      variant="outline"
      className="w-full flex items-center gap-2 rounded-full"
      onClick={handleRegisterWithGoogle}
    >
      <FcGoogle size={20} />
      S’inscrire avec Google
    </Button>
  );
}
