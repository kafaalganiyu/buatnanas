'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { StepType } from '@/types';
import { CONFESSION_PARTS } from '@/data/confessionData';
import BackgroundEffects from '@/components/BackgroundEffects';
import MusicPlayer from '@/components/MusicPlayer';
import OpeningScreen from '@/components/OpeningScreen';
import ConfessionStory from '@/components/ConfessionStory';
import FinalQuestion from '@/components/FinalQuestion';
import ConfirmationSequence from '@/components/ConfirmationSequence';
import FinalCelebration from '@/components/FinalCelebration';

export default function Home() {
  const [step, setStep] = useState<StepType>('opening');
  const [storyIndex, setStoryIndex] = useState(0);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  // Transition handlers
  const handleStart = () => {
    setIsPlayingMusic(true);
    setStep('story');
  };

  const handleNextStory = () => {
    if (storyIndex < CONFESSION_PARTS.length - 1) {
      setStoryIndex(storyIndex + 1);
    } else {
      setStep('question');
    }
  };

  const handlePrevStory = () => {
    if (storyIndex > 0) {
      setStoryIndex(storyIndex - 1);
    }
  };

  const handleAcceptQuestion = () => {
    setStep('confirmation');
  };

  const handleCompleteConfirmation = () => {
    setStep('celebration');
  };

  const handleCancelConfirmation = () => {
    setStep('question');
  };

  const handleRestart = () => {
    setStoryIndex(0);
    setStep('story');
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Dynamic Romantic Background with Floating Hearts & Twinkles */}
      <BackgroundEffects />

      {/* Floating Minimalist Music Player */}
      <MusicPlayer
        isPlaying={isPlayingMusic}
        onTogglePlay={() => setIsPlayingMusic(!isPlayingMusic)}
      />

      {/* Main Flow State Switcher */}
      <div className="relative z-10 w-full flex items-center justify-center min-h-[85vh]">
        <AnimatePresence mode="wait">
          {step === 'opening' && (
            <motion.div
              key="step-opening"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <OpeningScreen onStart={handleStart} />
            </motion.div>
          )}

          {step === 'story' && (
            <motion.div
              key="step-story"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <ConfessionStory
                currentPart={CONFESSION_PARTS[storyIndex]}
                currentIndex={storyIndex}
                totalParts={CONFESSION_PARTS.length}
                onNext={handleNextStory}
                onPrev={handlePrevStory}
              />
            </motion.div>
          )}

          {step === 'question' && (
            <motion.div
              key="step-question"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <FinalQuestion onAccept={handleAcceptQuestion} />
            </motion.div>
          )}

          {step === 'confirmation' && (
            <motion.div
              key="step-confirmation"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <ConfirmationSequence
                onComplete={handleCompleteConfirmation}
                onCancel={handleCancelConfirmation}
              />
            </motion.div>
          )}

          {step === 'celebration' && (
            <motion.div
              key="step-celebration"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <FinalCelebration onRestart={handleRestart} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Subtle bottom love watermark */}
      <footer className="relative z-10 pb-2 text-center text-xs text-sky-400/40 font-light select-none">
        made with 💙 for someone special
      </footer>
    </main>
  );
}
