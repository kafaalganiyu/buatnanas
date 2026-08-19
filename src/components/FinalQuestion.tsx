'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FINAL_QUESTION_DATA, REJECTION_RESPONSES } from '@/data/confessionData';
import { Heart } from 'lucide-react';

interface FinalQuestionProps {
  onAccept: () => void;
}

export default function FinalQuestion({ onAccept }: FinalQuestionProps) {
  const [noCount, setNoCount] = useState(0);
  const [noPosition, setNoPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleNoClick = () => {
    const nextCount = noCount + 1;
    setNoCount(nextCount);

    const maxOffset = Math.min(80, 20 + nextCount * 12);
    const randomX = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * maxOffset + 15);
    const randomY = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 25 + 10);

    setNoPosition({ x: randomX, y: randomY });
  };

  const yesScale = Math.min(2.1, 1 + noCount * 0.22);
  const currentRejectionMessage = noCount > 0 
    ? REJECTION_RESPONSES[Math.min(noCount - 1, REJECTION_RESPONSES.length - 1)]
    : null;

  return (
    <motion.div
      key="final-question"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-xl mx-auto px-4 sm:px-6 py-6 flex flex-col items-center justify-center min-h-[80vh] z-10"
    >
      <div className="w-full relative glass-card-glow rounded-3xl p-7 sm:p-12 text-center overflow-hidden shadow-2xl border-sky-300/50">
        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-sky-200/90 font-light mb-3 italic"
        >
          “{FINAL_QUESTION_DATA.intro}”
        </motion.p>

        {/* Climax Question */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-glow-blue leading-snug my-6"
        >
          {FINAL_QUESTION_DATA.question}
        </motion.h2>

        {/* Rejection Message Toast */}
        <div className="min-h-[36px] flex items-center justify-center my-3">
          <AnimatePresence mode="wait">
            {currentRejectionMessage && (
              <motion.div
                key={noCount}
                initial={{ opacity: 0, y: 8, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-300/40 text-rose-100 text-xs sm:text-sm font-medium shadow-md"
              >
                <span>{currentRejectionMessage}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Interactive Buttons Container */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 relative min-h-[120px]">
          {/* YES BUTTON (Grows progressively on every No click) */}
          <motion.button
            onClick={onAccept}
            style={{
              transformOrigin: 'center center',
            }}
            animate={{
              scale: yesScale,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
            }}
            whileHover={{ scale: yesScale * 1.05 }}
            whileTap={{ scale: yesScale * 0.96 }}
            className="px-8 py-3.5 rounded-full font-semibold text-base sm:text-lg glass-button-primary cursor-pointer flex items-center gap-2 shadow-2xl z-20"
          >
            <span>{FINAL_QUESTION_DATA.yesButton}</span>
            <Heart className="w-4 h-4 fill-slate-950 text-slate-950" />
          </motion.button>

          {/* NO BUTTON (Playfully drifts & dodges) */}
          <motion.button
            onClick={handleNoClick}
            animate={{
              x: noPosition.x,
              y: noPosition.y,
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 25,
            }}
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-2.5 rounded-full text-sm font-medium glass-button-secondary cursor-pointer transition-colors z-10"
          >
            <span>{FINAL_QUESTION_DATA.noButton}</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
