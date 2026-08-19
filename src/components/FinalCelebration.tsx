'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { CELEBRATION_DATA } from '@/data/confessionData';
import { Heart, Calendar, Disc3, RotateCcw } from 'lucide-react';

interface FinalCelebrationProps {
  onRestart: () => void;
}

export default function FinalCelebration({ onRestart }: FinalCelebrationProps) {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const now = new Date();
    setCurrentDate(
      now.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    );

    // Spider-Man Romantic Pink, White, Rose, Silver Confetti Cannons
    const colors = ['#f472b6', '#ec4899', '#db2777', '#ffffff', '#fda4af', '#fbcfe8'];

    const triggerConfetti = () => {
      confetti({
        particleCount: 85,
        spread: 100,
        origin: { y: 0.6 },
        colors,
      });
    };

    triggerConfetti();

    // Cascading confetti bursts
    const end = Date.now() + 4 * 1000;
    const interval: NodeJS.Timeout = setInterval(() => {
      if (Date.now() > end) {
        return clearInterval(interval);
      }
      confetti({
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors,
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      key="final-celebration"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col items-center justify-center min-h-[85vh] z-10 text-center"
    >
      <div className="w-full relative glass-card-glow rounded-3xl p-6 sm:p-10 overflow-hidden shadow-2xl border-pink-300/50">
        {/* Glow backdrop aura */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-pink-300/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-rose-300/25 rounded-full blur-3xl pointer-events-none" />

        {/* Celebrating Heart Icon */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 6, -6, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-5 rounded-full bg-gradient-to-tr from-pink-400/25 to-rose-500/30 border border-pink-300/60 flex items-center justify-center text-pink-500 shadow-[0_0_35px_rgba(244,114,182,0.5)]"
        >
          <Heart className="w-8 h-8 sm:w-10 sm:h-10 fill-pink-500 text-pink-500" />
        </motion.div>

        {/* Big Official Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 text-glow-pink leading-tight mb-2"
        >
          {CELEBRATION_DATA.title}
        </motion.h1>

        {/* Subtitle ("I'm your boyfriend now.") */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-pink-600 mb-6 italic shimmer-text"
        >
          “{CELEBRATION_DATA.subtitle}”
        </motion.h2>

        {/* Romantic Letter Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-5 sm:p-7 rounded-2xl bg-white/95 border border-pink-200 text-left my-5 relative shadow-md"
        >
          <p className="text-sm sm:text-base text-slate-800 font-normal leading-relaxed mb-4">
            {CELEBRATION_DATA.loveNote}
          </p>

          <div className="flex items-center justify-between pt-3 border-t border-pink-200 text-xs text-pink-700">
            <span className="flex items-center gap-1.5 font-medium">
              <Calendar className="w-3.5 h-3.5 text-pink-500" />
              {currentDate || 'Forever & Always'}
            </span>
            <span className="font-serif text-pink-600 italic font-bold text-sm">
              {CELEBRATION_DATA.signature}
            </span>
          </div>
        </motion.div>

        {/* Music indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-2 text-xs text-pink-700 mb-6 font-medium"
        >
          <Disc3 className="w-4 h-4 text-pink-500 animate-spin" />
          <span>Playing <strong className="text-slate-900 font-semibold">blue by yung kai</strong> ♫</span>
        </motion.div>

        {/* Restart / Replay button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center"
        >
          <button
            onClick={onRestart}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold glass-button-secondary hover:border-pink-400 cursor-pointer shadow-sm"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Read from the beginning</span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
