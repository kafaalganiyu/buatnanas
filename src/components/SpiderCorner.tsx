'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SpiderCorner() {
  return (
    <div className="fixed top-0 left-2 sm:left-6 z-50 pointer-events-none select-none">
      {/* Swinging Transparent Spider-Man */}
      <motion.div
        animate={{
          rotate: [-14, 14, -14],
          x: [-4, 4, -4],
          y: [0, 6, 0],
        }}
        transition={{
          duration: 3.2,
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
          className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(236,72,153,0.3)]"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (!target.src.includes('spiderman.jpg')) {
              target.src = '/gambar/spiderman.jpg';
            }
          }}
        />
      </motion.div>
    </div>
  );
}
