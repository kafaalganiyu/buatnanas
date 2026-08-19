'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONFIRMATION_STEPS } from '@/data/confessionData';
import { Heart, Sparkles, AlertCircle } from 'lucide-react';

interface ConfirmationSequenceProps {
  onComplete: () => void;
  onCancel: () => void;
}

export default function ConfirmationSequence({
  onComplete,
  onCancel,
}: ConfirmationSequenceProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [playfulNote, setPlayfulNote] = useState<string | null>(null);

  const currentStep = CONFIRMATION_STEPS[currentStepIndex];

  const handleYes = () => {
    setPlayfulNote(null);
    if (currentStepIndex < CONFIRMATION_STEPS.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      onComplete();
    }
  };

  const handleNo = () => {
    // Playful gentle response if they click no during confirmation
    const playfulNotes = [
      "No backing out now! 🤭",
      "Hey, you already clicked Yes once! 💙",
      "Are you sure you want to tease me? 😉",
    ];
    setPlayfulNote(playfulNotes[currentStepIndex] || "I know you secretly want to say yes! ✨");
  };

  return (
    <div className="w-full max-w-lg mx-auto px-5 py-6 flex flex-col items-center justify-center min-h-[75vh] z-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep.step}
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: -15 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full relative glass-card-glow rounded-3xl p-8 sm:p-10 text-center"
        >
          {/* Step Indicator */}
          <div className="flex items-center justify-center gap-1.5 mb-6">
            {CONFIRMATION_STEPS.map((s, idx) => (
              <div
                key={s.step}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentStepIndex
                    ? 'w-7 bg-sky-400'
                    : idx < currentStepIndex
                    ? 'w-3 bg-sky-500/50'
                    : 'w-2 bg-slate-800'
                }`}
              />
            ))}
          </div>

          {/* Floating Emoji / Icon */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="w-16 h-16 mx-auto mb-6 rounded-full bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(56,189,248,0.25)]"
          >
            {currentStepIndex === 0 && '🥺'}
            {currentStepIndex === 1 && '👀'}
            {currentStepIndex === 2 && '💙'}
          </motion.div>

          {/* Confirmation Question */}
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white text-glow-soft mb-8 leading-snug">
            {currentStep.question}
          </h3>

          {/* Playful alert if they tried clicking No */}
          {playfulNote && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 px-3 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-200 text-xs font-medium"
            >
              {playfulNote}
            </motion.div>
          )}

          {/* Confirmation Action Buttons */}
          <div className="flex items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleYes}
              className={`px-8 py-3 rounded-full text-base font-semibold glass-button-primary cursor-pointer shadow-lg flex items-center gap-2 ${
                currentStepIndex === 2 ? 'ring-2 ring-sky-300 animate-pulse' : ''
              }`}
            >
              <span>{currentStep.yesText}</span>
              <Heart className="w-4 h-4 fill-slate-950 text-slate-950" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.92 }}
              onClick={handleNo}
              className="px-5 py-2.5 rounded-full text-sm font-medium glass-button-secondary cursor-pointer"
            >
              {currentStep.noText}
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
