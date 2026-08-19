'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SpiderCorner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      className="fixed top-0 left-3 sm:left-8 z-40 pointer-events-none"
    >
      {/* Spiderweb thread hanging from the very top */}
      <div className="flex flex-col items-center">
        {/* Delicate Web Line */}
        <div className="w-[1.5px] h-12 sm:h-20 bg-gradient-to-b from-pink-300 via-pink-400 to-rose-400 shadow-[0_0_6px_rgba(244,114,182,0.8)]" />

        {/* Hanging Spider-Man Character */}
        <motion.div
          animate={{
            rotate: [-6, 6, -6],
            y: [0, 8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative -mt-1 origin-top"
        >
          {/* Subtle Pink Aura */}
          <div className="absolute -inset-2 bg-pink-400/25 rounded-full blur-md pointer-events-none" />

          {/* Spider-Man Image */}
          <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl overflow-hidden drop-shadow-xl flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/gambar/spiderman.jpg"
              alt="Spider-Man"
              className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(236,72,153,0.35)]"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (!target.src.endsWith('spiderman.png')) {
                  target.src = '/gambar/spiderman.png';
                }
              }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
