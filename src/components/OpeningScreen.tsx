'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

interface OpeningScreenProps {
  onStart: () => void;
}

export default function OpeningScreen({ onStart }: OpeningScreenProps) {
  return (
    <motion.div
      key="opening-screen"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -25, scale: 0.98 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center justify-center min-h-[75vh] px-6 text-center z-10 max-w-xl mx-auto"
    >
      {/* Decorative Top Glowing Heart */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          filter: [
            'drop-shadow(0 0 12px rgba(56, 189, 248, 0.4))',
            'drop-shadow(0 0 24px rgba(56, 189, 248, 0.8))',
            'drop-shadow(0 0 12px rgba(56, 189, 248, 0.4))',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="mb-8 p-4 rounded-full bg-sky-950/40 border border-sky-400/20 text-sky-400 backdrop-blur-md"
      >
        <Heart className="w-10 h-10 fill-sky-400/30" />
      </motion.div>

      {/* Greeting Title */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="space-y-4 mb-10"
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-sky-500/10 border border-sky-400/20 text-sky-300">
          <Sparkles className="w-3.5 h-3.5" />
          A special letter for you
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
          Hey, I made something <br />
          <span className="italic text-sky-300 shimmer-text">for you.</span>
        </h1>

        <p className="text-sm sm:text-base text-sky-200/75 max-w-md mx-auto font-light leading-relaxed">
          Please turn on your sound for the best experience. 🎧
        </p>
      </motion.div>

      {/* "Open it ♡" Button */}
      <motion.button
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        onClick={onStart}
        className="relative group px-8 py-3.5 rounded-full font-medium text-base tracking-wide glass-button-primary cursor-pointer flex items-center gap-2.5 shadow-xl overflow-hidden"
      >
        {/* Button Shimmer Ray */}
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
        
        <span className="relative font-semibold text-slate-950">
          Open it ♡
        </span>
        <Heart className="w-4 h-4 text-slate-950 fill-slate-950" />
      </motion.button>
    </motion.div>
  );
}
