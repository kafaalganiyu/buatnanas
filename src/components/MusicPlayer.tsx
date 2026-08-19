'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Volume2, VolumeX, Disc } from 'lucide-react';
import { motion } from 'framer-motion';

interface MusicPlayerProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export default function MusicPlayer({ isPlaying, onTogglePlay }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [, setHasInteracted] = useState(false);
  const [, setIsAudioLoaded] = useState(false);

  // Web Audio Synth Fallback (in case external mp3 fails to load or offline)
  const synthCtxRef = useRef<AudioContext | null>(null);
  const synthTimerRef = useRef<number | null>(null);

  const startFallbackSynth = useCallback(() => {
    try {
      if (!synthCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        synthCtxRef.current = new AudioCtx();
      }
      const ctx = synthCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Romantic chord progression in D major/B minor (Dmaj7 -> F#m7 -> Gmaj7 -> A)
      const chords = [
        [293.66, 369.99, 440.00, 554.37], // Dmaj7
        [369.99, 440.00, 554.37, 659.25], // F#m7
        [392.00, 493.88, 587.33, 739.99], // Gmaj7
        [440.00, 554.37, 659.25, 880.00], // A
      ];
      let chordIndex = 0;

      const playChord = () => {
        if (!ctx || ctx.state === 'closed') return;
        const currentChord = chords[chordIndex];
        chordIndex = (chordIndex + 1) % chords.length;

        currentChord.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          gain.gain.setValueAtTime(0, ctx.currentTime);
          gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 1.2);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 4.8);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(ctx.currentTime + idx * 0.15);
          osc.stop(ctx.currentTime + 5.0);
        });
      };

      playChord();
      synthTimerRef.current = window.setInterval(playChord, 4500);
    } catch {
      // Ignore web audio errors
    }
  }, []);

  const stopFallbackSynth = useCallback(() => {
    if (synthTimerRef.current) {
      clearInterval(synthTimerRef.current);
      synthTimerRef.current = null;
    }
    if (synthCtxRef.current && synthCtxRef.current.state === 'running') {
      synthCtxRef.current.suspend();
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      setHasInteracted(true);
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          startFallbackSynth();
        });
      }
    } else {
      audio.pause();
      stopFallbackSynth();
    }
  }, [isPlaying, startFallbackSynth, stopFallbackSynth]);

  const handleAudioError = () => {
    if (isPlaying) {
      startFallbackSynth();
    }
  };

  const handleAudioLoaded = () => {
    setIsAudioLoaded(true);
    stopFallbackSynth();
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onCanPlayThrough={handleAudioLoaded}
        onError={handleAudioError}
      >
        <source src="/audio/blue-yung-kai.mp3" type="audio/mpeg" />
        <source src="/audio/yung kai - blue (Lyrics).mp3" type="audio/mpeg" />
      </audio>

      {/* Floating Music Player Pill (White & Pink Spider-Man theme) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50"
      >
        <button
          onClick={onTogglePlay}
          aria-label={isPlaying ? "Pause music" : "Play music"}
          className="group flex items-center gap-2.5 px-3.5 py-2 rounded-full glass-card hover:border-pink-400 transition-all duration-300 shadow-lg shadow-pink-200/50 cursor-pointer bg-white/90"
        >
          {/* Vinyl / Music Icon */}
          <div className="relative flex items-center justify-center">
            <motion.div
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="text-pink-500"
            >
              <Disc className="w-5 h-5" />
            </motion.div>
            {isPlaying && (
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-pink-500 animate-ping" />
            )}
          </div>

          {/* Song Info & Equalizer */}
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center gap-1">
              <span className="text-xs font-semibold text-slate-800 tracking-wide">
                blue
              </span>
              <span className="text-[10px] text-pink-600 font-medium">
                yung kai
              </span>
            </div>

            {/* Visualizer bars */}
            <div className="flex items-center gap-0.5 h-3 mt-0.5">
              <div className={`w-0.5 rounded-full bg-pink-500 ${isPlaying ? 'eq-bar-1' : 'h-1 opacity-40'}`} />
              <div className={`w-0.5 rounded-full bg-pink-400 ${isPlaying ? 'eq-bar-2' : 'h-1.5 opacity-40'}`} />
              <div className={`w-0.5 rounded-full bg-pink-500 ${isPlaying ? 'eq-bar-3' : 'h-1 opacity-40'}`} />
            </div>
          </div>

          {/* Play / Pause Toggle Icon */}
          <div className="ml-1 text-pink-600 group-hover:text-pink-800 transition-colors">
            {isPlaying ? (
              <Volume2 className="w-4 h-4" />
            ) : (
              <VolumeX className="w-4 h-4 text-pink-300" />
            )}
          </div>
        </button>
      </motion.div>
    </>
  );
}
