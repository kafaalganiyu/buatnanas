'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SpiderCorner() {
  return (
    <div className="fixed -top-1 sm:-top-2 left-2 sm:left-6 z-50 pointer-events-none select-none">
      {/* Swinging Transparent Spider-Man (no box, no extra web) */}
      <motion.div
        animate={{
          rotate: [-12, 12, -12],
          x: [-3, 3, -3],
          y: [0, 5, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          transformOrigin: 'top center',
        }}
        className="w-32 h-32 sm:w-44 sm:h-44 relative"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/gambar/spiderman.png"
          alt="Spider-Man"
          className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(236,72,153,0.35)]"
        />
      </motion.div>
    </div>
  );
}
