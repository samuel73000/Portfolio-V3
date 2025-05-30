'use client';


import Typewriter from 'typewriter-effect';
import React from 'react';

export default function TypewriterText() {
  return (
    <Typewriter
      options={{
        strings: ['Im a Software Engineer.', 'Créateur de sites web', 'Passionné de code'],
        autoStart: true,
        loop: true,
      }}
    />
  );
}
