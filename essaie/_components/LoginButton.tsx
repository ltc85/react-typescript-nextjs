"use client";

import React, { useState } from "react";
import Button from "./Button";



export default function LoginButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    // Simulate a login process
    setTimeout(() => {
      alert("Connexion réussie");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Button onClick={handleLogin} disabled={isLoading}>
      {isLoading ? "Chargement..." : "Connexion"}
    </Button>
  );
}