'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function LoginButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      alert("Connexion réussie");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Button className="bg-orange-400 text-white rounded-full" onClick={handleLogin} disabled={isLoading}>
      {isLoading ? "Chargement..." : "Connexion"}
    </Button>
  );
}
