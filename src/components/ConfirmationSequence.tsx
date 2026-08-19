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
      "Hey, you already clicked Yes once! 💙",
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
          className="w-full relative glass-card-glow rounded-3xl p-7 sm:p-10 text-center shadow-2xl border-sky-300/50"
        >
          {/* Step Indicator */}
          <div className="flex items-center justify-center gap-1.5 mb-5">
            {CONFIRMATION_STEPS.map((s, idx) => (
              <div
                key={s.step}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentStepIndex
                    ? 'w-7 bg-sky-300 shadow-[0_0_8px_rgba(125,211,252,0.8)]'
                    : idx < currentStepIndex
                    ? 'w-3 bg-sky-400/50'
                    : 'w-2 bg-sky-950/60'
                }`}
              />
            ))}
          </div>

          {/* Reaction Image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-5 rounded-2xl overflow-hidden shadow-xl border-2 border-sky-300/60 bg-slate-900 flex items-center justify-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentImage}
              alt="Reaction"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </motion.div>

          {/* Confirmation Question */}
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white text-glow-soft mb-6 leading-snug">
            {currentStep.question}
          </h3>

          {/* Playful alert if they tried clicking No */}
          {playfulNote && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5 px-3.5 py-1.5 rounded-full bg-sky-400/20 border border-sky-300/40 text-sky-100 text-xs sm:text-sm font-medium shadow"
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
                currentStepIndex === 2 ? 'ring-2 ring-sky-200 animate-pulse' : ''
              }`}
            >
              <span>{currentStep.yesText}</span>
              <Heart className="w-4 h-4 fill-slate-950 text-slate-950" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.92 }}
              onClick={handleNo}
              className="px-5 py-2.5 rounded-full text-sm font-medium glass-button-secondary cursor-pointer shadow-md"
            >
              {currentStep.noText}
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
