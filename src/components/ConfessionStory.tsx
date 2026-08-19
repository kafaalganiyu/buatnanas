'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ConfessionPart } from '@/types';
import { Heart, ChevronLeft, Sparkles } from 'lucide-react';

interface ConfessionStoryProps {
  currentPart: ConfessionPart;
  currentIndex: number;
  totalParts: number;
  onNext: () => void;
  onPrev: () => void;
}

export default function ConfessionStory({
  currentPart,
  currentIndex,
  totalParts,
  onNext,
  onPrev,
}: ConfessionStoryProps) {
  const isEmphasis = currentPart.emphasis;

  return (
    <div className="w-full max-w-xl mx-auto px-5 py-6 flex flex-col items-center justify-center min-h-[75vh] z-10">
      {/* Progress Dots / Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full flex items-center justify-between gap-3 mb-8 px-2"
      >
        {/* Back button (if not on first slide) */}
        <div className="w-10">
          {currentIndex > 0 && (
            <button
              onClick={onPrev}
              className="p-2 rounded-full glass-card hover:border-sky-400/40 text-sky-300 hover:text-white transition-all cursor-pointer"
              aria-label="Previous line"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Subtle step indicators */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {Array.from({ length: totalParts }).map((_, idx) => (
            <motion.div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === currentIndex
                  ? 'w-6 bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]'
                  : idx < currentIndex
                  ? 'w-2 bg-sky-500/40'
                  : 'w-1.5 bg-slate-800'
              }`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="w-10 text-right">
          <span className="text-[11px] font-mono text-sky-400/70">
            {currentIndex + 1}/{totalParts}
          </span>
        </div>
      </motion.div>

      {/* Confession Card Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPart.id}
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.98 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full relative rounded-3xl p-8 sm:p-10 text-center transition-all duration-500 ${
            isEmphasis
              ? 'glass-card-glow border-sky-400/40'
              : 'glass-card'
          }`}
        >
          {/* Decorative Corner Accent */}
          <div className="absolute top-4 right-4 text-sky-400/20">
            <Heart className="w-5 h-5 fill-sky-400/10" />
          </div>

          {/* Part 7 Visual Accent Tag */}
          {isEmphasis && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-400/15 border border-sky-400/30 text-sky-200 mb-6 shadow-[0_0_15px_rgba(56,189,248,0.3)]"
            >
              <Sparkles className="w-3 h-3 text-sky-300" />
              <span>A confession from the heart</span>
            </motion.div>
          )}

          {/* Confession Statement */}
          <div className="min-h-[140px] flex flex-col justify-center items-center">
            <p
              className={`leading-relaxed tracking-wide ${
                isEmphasis
                  ? 'font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-glow-blue'
                  : 'font-serif text-xl sm:text-2xl md:text-3xl text-sky-50 font-normal'
              }`}
            >
              “{currentPart.content}”
            </p>

            {currentPart.subtext && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 text-sm sm:text-base font-sans text-sky-300/80 italic"
              >
                {currentPart.subtext}
              </motion.p>
            )}
          </div>

          {/* Action Button */}
          <div className="mt-8 sm:mt-10 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              onClick={onNext}
              className={`px-7 py-3 rounded-full text-sm sm:text-base font-medium tracking-wide cursor-pointer flex items-center gap-2 ${
                isEmphasis
                  ? 'glass-button-primary shadow-[0_0_25px_rgba(56,189,248,0.5)] font-semibold'
                  : 'glass-button-primary'
              }`}
            >
              <span>{currentPart.buttonText || "Continue ♡"}</span>
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
