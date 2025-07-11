"use client";

import { useState } from 'react';

function Header({ title }: { title: string }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

function HomePage(): JSX.Element {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}

export default HomePage; // ✅ ← Ceci est indispensable !
// Si vous ne l'incluez pas, la page ne sera pas rendue correctement.