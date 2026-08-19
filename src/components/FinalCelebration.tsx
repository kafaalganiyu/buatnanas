'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { CELEBRATION_DATA } from '@/data/confessionData';
import { Heart, Sparkles, Music2, RotateCcw, Calendar, Disc3 } from 'lucide-react';

interface FinalCelebrationProps {
  onRestart: () => void;
}

export default function FinalCelebration({ onRestart }: FinalCelebrationProps) {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Format today's date romantically
    const now = new Date();
    setCurrentDate(
      now.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    );

    // Romantic Blue & Sky Confetti Cannons
    const colors = ['#38bdf8', '#0ea5e9', '#bae6fd', '#ffffff', '#60a5fa', '#93c5fd'];

    const triggerConfetti = () => {
      confetti({
        particleCount: 75,
        spread: 90,
        origin: { y: 0.6 },
        colors,
      });
    };

    triggerConfetti();

    // Cascading confetti bursts
    const end = Date.now() + 3.5 * 1000;
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
    }, 450);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      key="final-celebration"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-xl mx-auto px-4 sm:px-6 py-8 flex flex-col items-center justify-center min-h-[85vh] z-10 text-center"
    >
      <div className="w-full relative glass-card-glow rounded-3xl p-7 sm:p-11 overflow-hidden shadow-2xl border-sky-400/40">
        {/* Glow backdrop aura */}
        <div className="absolute -top-24 -left-24 w-60 h-60 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

        {/* Celebrating Header Icon */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-tr from-sky-500/20 to-blue-500/30 border border-sky-300/40 flex items-center justify-center text-sky-300 shadow-[0_0_30px_rgba(56,189,248,0.4)]"
        >
          <Heart className="w-10 h-10 fill-sky-400 text-sky-300" />
        </motion.div>

        {/* Big Official Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white text-glow-blue leading-tight mb-2"
        >
          {CELEBRATION_DATA.title}
        </motion.h1>

        {/* Subtitle ("I'm your girlfriend now.") */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium text-sky-200 mb-6 italic shimmer-text"
        >
          “{CELEBRATION_DATA.subtitle}”
        </motion.h2>

        {/* Romantic Letter Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-6 sm:p-7 rounded-2xl bg-midnight-900/70 border border-sky-400/25 text-left my-6 relative shadow-inner"
        >
          <p className="text-sm sm:text-base text-sky-100/90 font-light leading-relaxed mb-4">
            {CELEBRATION_DATA.loveNote}
          </p>

          <div className="flex items-center justify-between pt-3 border-t border-sky-400/20 text-xs text-sky-300/80">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-sky-400" />
              {currentDate || 'Forever & Always'}
            </span>
            <span className="font-serif text-sky-200 italic font-medium text-sm">
              {CELEBRATION_DATA.signature}
            </span>
          </div>
        </motion.div>

        {/* Music indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-2 text-xs text-sky-300/90 mb-8"
        >
          <Disc3 className="w-4 h-4 text-sky-400 animate-spin" />
          <span>Playing <strong className="text-white font-medium">blue — yung kai</strong> ♫</span>
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
            className="flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium glass-button-secondary hover:border-sky-400/40 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Read from the beginning</span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
