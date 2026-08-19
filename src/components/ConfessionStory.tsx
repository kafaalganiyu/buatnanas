'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ConfessionPart } from '@/types';
import { Heart, ChevronLeft } from 'lucide-react';

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
  const hasImage = !!currentPart.image;
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="w-full max-w-xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex flex-col items-center justify-center min-h-[75vh] z-10">
      {/* Progress Header & Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full flex items-center justify-between gap-3 mb-5 px-2"
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
        <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap justify-center max-w-[240px]">
          {Array.from({ length: totalParts }).map((_, idx) => (
            <motion.div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === currentIndex
                  ? 'w-5 bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]'
                  : idx < currentIndex
                  ? 'w-2 bg-sky-500/40'
                  : 'w-1 bg-slate-800'
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
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full relative rounded-3xl p-6 sm:p-9 text-center transition-all duration-500 ${
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
          <div className="min-h-[110px] flex flex-col justify-center items-center">
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
                transition={{ delay: 0.25 }}
                className="mt-3 text-sm sm:text-base font-sans text-sky-300/85 italic"
              >
                {currentPart.subtext}
              </motion.p>
            )}

            {/* Attached Image / Polaroid Frame */}
            {hasImage && currentPart.image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-5 p-2.5 sm:p-3 bg-white/95 rounded-2xl shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300 max-w-[280px] sm:max-w-[320px] mx-auto text-slate-800 border border-sky-200/50"
              >
                <div className="w-full max-h-56 sm:max-h-64 rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={currentPart.image}
                    alt="Memory"
                    className="w-full h-auto max-h-56 sm:max-h-64 object-contain rounded-xl hover:scale-105 transition-transform duration-500"
                    onLoad={() => setImageLoaded(true)}
                  />
                </div>
                {currentPart.imageCaption && (
                  <p className="mt-2 text-xs font-sans font-medium text-slate-700 italic text-center px-1">
                    {currentPart.imageCaption}
                  </p>
                )}
              </motion.div>
            )}
          </div>

          {/* Action Button */}
          <div className="mt-7 flex justify-center">
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
