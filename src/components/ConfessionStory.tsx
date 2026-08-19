'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ConfessionPart } from '@/types';
import { Heart, ChevronLeft, Image as ImageIcon } from 'lucide-react';

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
  // Check if current part is the thinking about you / memory section (Part 6)
  const isMemoryPart = currentPart.id === 6;

  return (
    <div className="w-full max-w-xl mx-auto px-4 sm:px-6 py-6 flex flex-col items-center justify-center min-h-[75vh] z-10">
      {/* Progress Bar & Navigation Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full flex items-center justify-between gap-3 mb-6 px-2"
      >
        {/* Back button */}
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
          className={`w-full relative rounded-3xl p-7 sm:p-10 text-center transition-all duration-500 ${
            isEmphasis
              ? 'glass-card-glow border-sky-400/50 shadow-[0_0_35px_rgba(14,165,233,0.3)]'
              : 'glass-card'
          }`}
        >
          {/* Subtle Corner Heart */}
          <div className="absolute top-4 right-4 text-sky-400/20">
            <Heart className="w-4 h-4 fill-sky-400/10" />
          </div>

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
                transition={{ delay: 0.3 }}
                className="mt-4 text-sm sm:text-base font-sans text-sky-300/85 italic"
              >
                {currentPart.subtext}
              </motion.p>
            )}

            {/* Dedicated Memory Polaroid Frame for Part 6 */}
            {isMemoryPart && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mt-6 p-3 bg-white/95 rounded-xl shadow-xl transform -rotate-1 hover:rotate-0 transition-transform duration-300 max-w-[240px] mx-auto text-slate-800"
              >
                <div className="w-full h-32 rounded-lg bg-gradient-to-tr from-sky-900 via-blue-800 to-indigo-950 flex flex-col items-center justify-center p-3 relative overflow-hidden border border-sky-300/30">
                  <div className="text-3xl mb-1">💭💙</div>
                  <span className="text-[11px] text-sky-100 font-serif italic text-center leading-tight">
                    Always on my mind
                  </span>
                </div>
                <p className="mt-2 text-[11px] font-sans font-medium text-slate-700 italic text-center">
                  thinking about you all this time ♡
                </p>
              </motion.div>
            )}
          </div>

          {/* Action Button */}
          <div className="mt-8 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              onClick={onNext}
              className="px-8 py-3 rounded-full text-sm sm:text-base font-semibold tracking-wide glass-button-primary cursor-pointer flex items-center gap-2 shadow-lg"
            >
              <span>{currentPart.buttonText || "Continue ♡"}</span>
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
