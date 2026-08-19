'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Disc3 } from 'lucide-react';

interface VinylPlayerProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  variant?: 'prominent' | 'compact';
}

export default function VinylPlayer({ isPlaying, onTogglePlay, variant = 'prominent' }: VinylPlayerProps) {
  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50"
      >
        <button
          onClick={onTogglePlay}
          aria-label={isPlaying ? "Pause track" : "Play track"}
          className="group flex items-center gap-3 px-4 py-2 rounded-full glass-card hover:border-pink-300 transition-all duration-300 shadow-xl shadow-pink-100/50 cursor-pointer bg-white/95"
        >
          {/* Mini Vinyl */}
          <div className="relative w-8 h-8 flex items-center justify-center">
            <motion.div
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="w-8 h-8 rounded-full bg-slate-900 border border-pink-400 flex items-center justify-center shadow-md relative overflow-hidden"
            >
              {/* Center user image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/gambar/blue.png"
                alt="blue cover"
                className="w-4 h-4 rounded-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </motion.div>
            {isPlaying && (
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-pink-500 animate-ping" />
            )}
          </div>

          {/* Track details */}
          <div className="flex flex-col text-left">
            <span className="text-xs font-semibold text-slate-800 flex items-center gap-1">
              blue <span className="text-[10px] text-pink-600 font-normal">by yung kai</span>
            </span>
            <span className="text-[10px] text-pink-500 font-medium">
              {isPlaying ? 'Now Playing ♫' : 'Paused ⏸'}
            </span>
          </div>

          {/* Play/Pause Icon */}
          <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 group-hover:bg-pink-500 group-hover:text-white transition-colors ml-1">
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 ml-0.5" />}
          </div>
        </button>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center my-4 sm:my-6 z-20">
      {/* Big Interactive Vinyl Disc with White & Soft Pink Accents */}
      <div className="relative group cursor-pointer" onClick={onTogglePlay}>
        {/* Luminous Pink Glow behind Vinyl */}
        <div
          className={`absolute -inset-5 rounded-full blur-3xl transition-all duration-700 pointer-events-none ${
            isPlaying ? 'bg-pink-400/40 scale-110' : 'bg-pink-300/20 scale-95'
          }`}
        />

        {/* Tonearm / Stylus */}
        <div className="absolute -top-6 -right-4 sm:-top-8 sm:-right-6 w-16 h-24 sm:w-20 sm:h-28 pointer-events-none z-30 transition-transform duration-700 origin-top-right">
          <motion.div
            animate={{ rotate: isPlaying ? 18 : 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="w-full h-full relative origin-[85%_15%]"
          >
            {/* Base */}
            <div className="absolute top-0 right-0 w-6 h-6 rounded-full bg-white border-2 border-pink-400 shadow-lg" />
            {/* Arm */}
            <div className="absolute top-3 right-3 w-1.5 h-16 sm:h-20 bg-gradient-to-b from-pink-200 via-slate-300 to-pink-300 rounded-full shadow" />
            {/* Needle */}
            <div className="absolute bottom-1 right-2 w-3.5 h-5 bg-pink-500 rounded-sm shadow border border-white rotate-12" />
          </motion.div>
        </div>

        {/* Vinyl Disc */}
        <motion.div
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#0f172a] border-4 border-pink-300/70 shadow-[0_0_40px_rgba(244,114,182,0.35)] flex items-center justify-center overflow-hidden select-none"
        >
          {/* Shiny Vinyl Gloss Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-80 pointer-events-none" />
          
          {/* Realistic Grooves */}
          <div className="absolute inset-2 sm:inset-3 rounded-full border border-pink-300/20 pointer-events-none" />
          <div className="absolute inset-5 sm:inset-7 rounded-full border border-pink-300/15 pointer-events-none" />
          <div className="absolute inset-9 sm:inset-12 rounded-full border border-pink-300/20 pointer-events-none" />
          <div className="absolute inset-14 sm:inset-18 rounded-full border border-pink-300/15 pointer-events-none" />

          {/* Center Album Cover (User's blue.png) */}
          <div className="w-20 h-20 sm:w-26 sm:h-26 rounded-full border-2 border-pink-200 shadow-2xl relative z-10 overflow-hidden bg-pink-500 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/gambar/blue.png"
              alt="blue by yung kai"
              className="w-full h-full object-cover"
            />
            {/* Center Spindle Hole */}
            <div className="absolute w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#0f172a] border border-pink-200 shadow-inner" />
          </div>
        </motion.div>

        {/* Hover / Click to Play Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/35 rounded-full z-20 backdrop-blur-[2px]">
          <div className="w-14 h-14 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-2xl">
            {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-0.5" />}
          </div>
        </div>
      </div>

      {/* Track info tag */}
      <div className="mt-4 flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-card border-pink-200 text-xs text-slate-800 shadow-md bg-white/90">
        <Disc3 className={`w-3.5 h-3.5 text-pink-500 ${isPlaying ? 'animate-spin' : ''}`} />
        <span>yung kai • <strong className="text-pink-600 font-semibold">blue</strong></span>
        <button
          onClick={onTogglePlay}
          className="ml-1 px-3 py-0.5 rounded-full bg-pink-100 hover:bg-pink-500 hover:text-white text-pink-700 font-semibold transition-all text-[11px] cursor-pointer"
        >
          {isPlaying ? 'Pause' : 'Play ♫'}
        </button>
      </div>
    </div>
  );
}
