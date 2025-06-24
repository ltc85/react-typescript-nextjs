'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

export default function RegisterButton() {
  const handleClick = () => {
    alert('Inscription réussie');
  };

  return (
    <Button className="bg-amber-500 rounded-full" onClick={handleClick}>
      Inscription
    </Button>
  );
}
