'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SpiderCorner() {
  return (
    <div className="fixed top-0 left-2 sm:left-6 z-50 pointer-events-none">
      {/* Spiderweb line from the top edge */}
      <div className="flex flex-col items-center">
        {/* Glowing Spiderweb String */}
        <div className="w-0.5 h-14 sm:h-24 bg-gradient-to-b from-pink-300 via-pink-400 to-rose-400 shadow-[0_0_8px_rgba(236,72,153,0.8)]" />

        {/* Swinging Spider-Man Character */}
        <motion.div
          animate={{
            rotate: [-8, 8, -8],
            y: [0, 6, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative -mt-1 origin-top"
        >
          {/* Spider-Man Picture Card */}
          <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl overflow-hidden drop-shadow-2xl flex items-center justify-center p-1 bg-white/40 backdrop-blur-sm border border-pink-200/60 shadow-lg shadow-pink-200/50">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/gambar/spiderman.jpg"
              alt="Spider-Man"
              className="w-full h-full object-contain filter drop-shadow-md"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (!target.src.includes('spiderman.png')) {
                  target.src = '/gambar/spiderman.png';
                }
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
