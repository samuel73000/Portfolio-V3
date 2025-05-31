'use client';


import Typewriter from 'typewriter-effect';
import React from 'react';

export default function TypewriterText() {
  return (
    <Typewriter
      options={{
        strings: ['Développeur front-end freelance.', 'Créateur d’expériences web sur mesure.'],
        autoStart: true,
        loop: true,
      }}
    />
  );
}
