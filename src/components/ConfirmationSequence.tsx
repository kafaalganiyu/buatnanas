'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONFIRMATION_STEPS } from '@/data/confessionData';
import { Heart } from 'lucide-react';

interface ConfirmationSequenceProps {
  onComplete: () => void;
  onCancel: () => void;
}

const STEP_IMAGES = [
  '/gambar/areyousure.jpg',
  '/gambar/likereallysure.jpg',
  '/gambar/okaybutyouare.jpg',
];

export default function ConfirmationSequence({
  onComplete,
  onCancel,
}: ConfirmationSequenceProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [playfulNote, setPlayfulNote] = useState<string | null>(null);

  const currentStep = CONFIRMATION_STEPS[currentStepIndex];
  const currentImage = STEP_IMAGES[currentStepIndex];

  const handleYes = () => {
    setPlayfulNote(null);
    if (currentStepIndex < CONFIRMATION_STEPS.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      onComplete();
    }
  };

  const handleNo = () => {
    const playfulNotes = [
      "No backing out now, Nasss! 🤭",
      "Hey, you already clicked Yes once! 💖",
      "Are you sure you want to tease me, Nanasss? 😉",
    ];
    setPlayfulNote(playfulNotes[currentStepIndex] || "I know you secretly want to say yes! ✨");
  };

  return (
    <div className="w-full max-w-lg mx-auto px-4 sm:px-6 py-6 flex flex-col items-center justify-center min-h-[75vh] z-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep.step}
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: -15 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full relative glass-card-glow rounded-3xl p-7 sm:p-10 text-center shadow-2xl border-pink-300/40"
        >
          {/* Step Indicator */}
          <div className="flex items-center justify-center gap-1.5 mb-5">
            {CONFIRMATION_STEPS.map((s, idx) => (
              <div
                key={s.step}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentStepIndex
                    ? 'w-7 bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.6)]'
                    : idx < currentStepIndex
                    ? 'w-3 bg-pink-300'
                    : 'w-2 bg-pink-100'
                }`}
              />
            ))}
          </div>

          {/* Prominent Reaction Photo from user (No emojis) */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-36 h-36 sm:w-44 sm:h-44 mx-auto mb-6 rounded-2xl overflow-hidden shadow-xl border-2 border-pink-300/50 bg-white flex items-center justify-center p-1.5"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentImage}
              alt="Confirmation reaction"
              className="w-full h-full object-contain rounded-xl"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </motion.div>

          {/* Confirmation Question (Clean without emojis) */}
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-slate-900 text-glow-soft mb-6 leading-snug">
            {currentStep.question}
          </h3>

          {/* Playful alert if they tried clicking No */}
          {playfulNote && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5 px-4 py-1.5 rounded-full bg-pink-100 border border-pink-300 text-pink-700 text-xs sm:text-sm font-medium shadow-sm"
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
              className={`px-8 py-3 rounded-full text-base font-semibold glass-button-primary cursor-pointer shadow-xl flex items-center gap-2 ${
                currentStepIndex === 2 ? 'ring-2 ring-pink-400 animate-pulse' : ''
              }`}
            >
              <span>{currentStep.yesText}</span>
              <Heart className="w-4 h-4 fill-white text-white" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.92 }}
              onClick={handleNo}
              className="px-5 py-2.5 rounded-full text-sm font-medium glass-button-secondary cursor-pointer shadow-sm"
            >
              {currentStep.noText}
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
