'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ConfessionPart } from '@/types';
import { Heart, ChevronLeft, Music2 } from 'lucide-react';

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
  const hasSingleImage = !!currentPart.image;
  const hasMultipleImages = !!(currentPart.images && currentPart.images.length > 0);
  const isLyricsPart = currentPart.id === 10;

  return (
    <div className="w-full max-w-xl mx-auto px-4 sm:px-6 py-3 sm:py-6 flex flex-col items-center justify-center min-h-[75vh] z-10">
      {/* Progress Header & Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full flex items-center justify-between gap-3 mb-4 sm:mb-5 px-2"
      >
        {/* Back button */}
        <div className="w-10">
          {currentIndex > 0 && (
            <button
              onClick={onPrev}
              className="p-2 rounded-full glass-card hover:border-pink-300 text-pink-700 hover:text-pink-900 transition-all cursor-pointer shadow-md"
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
                  ? 'w-5 bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.7)]'
                  : idx < currentIndex
                  ? 'w-2 bg-pink-300'
                  : 'w-1 bg-pink-100'
              }`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="w-10 text-right">
          <span className="text-[11px] font-mono font-medium text-pink-600">
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
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full relative rounded-3xl p-6 sm:p-9 text-center transition-all duration-500 shadow-2xl ${
            isEmphasis
              ? 'glass-card-glow border-pink-400/50 shadow-[0_16px_45px_rgba(236,72,153,0.22)]'
              : 'glass-card'
          }`}
        >
          {/* Subtle Corner Heart */}
          <div className="absolute top-4 right-4 text-pink-400/40">
            <Heart className="w-4 h-4 fill-pink-300/30" />
          </div>

          {/* Confession Statement */}
          <div className="min-h-[110px] flex flex-col justify-center items-center">
            <p
              className={`leading-relaxed tracking-wide ${
                isEmphasis
                  ? 'font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 text-glow-pink'
                  : 'font-serif text-xl sm:text-2xl md:text-3xl text-slate-800 font-normal'
              }`}
            >
              “{currentPart.content}”
            </p>

            {/* Special Lyrics Highlight Box */}
            {isLyricsPart && currentPart.subtext && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-4 p-5 sm:p-6 rounded-2xl bg-pink-50/90 border border-pink-300 shadow-inner text-center relative max-w-md mx-auto"
              >
                <div className="flex items-center justify-center gap-1.5 text-pink-600 text-xs mb-3 font-semibold">
                  <Music2 className="w-3.5 h-3.5 animate-pulse" />
                  <span>blue by yung kai</span>
                </div>
                <p className="font-serif italic text-base sm:text-lg text-slate-800 leading-relaxed whitespace-pre-line font-medium">
                  {currentPart.subtext}
                </p>
              </motion.div>
            )}

            {/* Standard Subtext (if not lyrics) */}
            {!isLyricsPart && currentPart.subtext && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="mt-3 text-sm sm:text-base font-sans text-pink-700 italic font-medium"
              >
                {currentPart.subtext}
              </motion.p>
            )}

            {/* Single Photo Polaroid (Clean, No Caption) */}
            {hasSingleImage && currentPart.image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-5 p-2.5 sm:p-3 bg-white rounded-2xl shadow-xl transform -rotate-1 hover:rotate-0 transition-transform duration-300 max-w-[280px] sm:max-w-[340px] mx-auto border-2 border-pink-200"
              >
                <div className="w-full max-h-60 sm:max-h-72 rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={currentPart.image}
                    alt="Memory"
                    className="w-full h-auto max-h-60 sm:max-h-72 object-contain rounded-xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            )}

            {/* Multiple Photos Grid (Part 8: twit1 & twit2, Clean, No Caption) */}
            {hasMultipleImages && currentPart.images && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[320px] sm:max-w-[460px] mx-auto"
              >
                {currentPart.images.map((imgSrc, idx) => (
                  <div
                    key={idx}
                    className={`p-2 bg-white rounded-2xl shadow-xl transition-transform duration-300 border-2 border-pink-200 ${
                      idx === 0 ? 'sm:-rotate-1 hover:rotate-0' : 'sm:rotate-1 hover:rotate-0'
                    }`}
                  >
                    <div className="w-full h-44 sm:h-52 rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={imgSrc}
                        alt={`Tweet memory ${idx + 1}`}
                        className="w-full h-full object-contain rounded-xl hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Action Button */}
          <div className="mt-7 sm:mt-8 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={onNext}
              className="px-8 py-3 rounded-full text-sm sm:text-base font-semibold tracking-wide glass-button-primary cursor-pointer flex items-center gap-2 shadow-xl"
            >
              <span>{currentPart.buttonText || "Continue ♡"}</span>
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
