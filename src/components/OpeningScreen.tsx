'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import VinylPlayer from './VinylPlayer';

interface OpeningScreenProps {
  onStart: () => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export default function OpeningScreen({ onStart, isPlaying, onTogglePlay }: OpeningScreenProps) {
  return (
    <motion.div
      key="opening-screen"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -25, scale: 0.98 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center justify-center min-h-[80vh] px-4 sm:px-6 text-center z-10 max-w-xl mx-auto"
    >
      {/* Greeting Title */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="space-y-3 mb-3"
      >
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
          Hey Nasss, I made something <br />
          <span className="italic text-sky-300 shimmer-text">for you.</span>
        </h1>
        
        {/* Indonesian begadang note */}
        <p className="text-xs sm:text-sm text-sky-200/90 max-w-md mx-auto font-normal bg-sky-500/15 py-1.5 px-4 rounded-full border border-sky-400/25 inline-block shadow-sm">
          maaf yaa semalem begadang, akuu bikin ini :))) 💙
        </p>
      </motion.div>

      {/* Prominent Center Blue Vinyl Record Player with user cover */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="my-1 sm:my-2"
      >
        <VinylPlayer
          isPlaying={isPlaying}
          onTogglePlay={onTogglePlay}
          variant="prominent"
        />
      </motion.div>

      {/* "Open it ♡" Button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-3 sm:mt-4"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={onStart}
          className="relative group px-9 py-3.5 rounded-full font-medium text-base tracking-wide glass-button-primary cursor-pointer flex items-center gap-2.5 shadow-2xl overflow-hidden"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          
          <span className="relative font-semibold text-slate-950">
            Open it ♡
          </span>
          <Heart className="w-4 h-4 text-slate-950 fill-slate-950" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
