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
          className="group flex items-center gap-3 px-4 py-2 rounded-full glass-card hover:border-sky-300/60 transition-all duration-300 shadow-xl shadow-sky-900/40 cursor-pointer"
        >
          {/* Mini Vinyl */}
          <div className="relative w-8 h-8 flex items-center justify-center">
            <motion.div
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-950 via-slate-900 to-sky-900 border border-sky-400/50 flex items-center justify-center shadow-md relative overflow-hidden"
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
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-sky-400 animate-ping" />
            )}
          </div>

          {/* Track details */}
          <div className="flex flex-col text-left">
            <span className="text-xs font-semibold text-sky-100 flex items-center gap-1">
              blue <span className="text-[10px] text-sky-200/80 font-normal">by yung kai</span>
            </span>
            <span className="text-[10px] text-sky-300 font-medium">
              {isPlaying ? 'Now Playing ♫' : 'Paused ⏸'}
            </span>
          </div>

          {/* Play/Pause Icon */}
          <div className="w-6 h-6 rounded-full bg-sky-400/25 flex items-center justify-center text-sky-200 group-hover:bg-sky-400 group-hover:text-slate-950 transition-colors ml-1">
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 ml-0.5" />}
          </div>
        </button>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center my-4 sm:my-6 z-20">
      {/* Big Interactive Blue Vinyl Disc */}
      <div className="relative group cursor-pointer" onClick={onTogglePlay}>
        {/* Luminous Glow behind Vinyl */}
        <div
          className={`absolute -inset-5 rounded-full blur-3xl transition-all duration-700 pointer-events-none ${
            isPlaying ? 'bg-sky-400/35 scale-110' : 'bg-sky-400/15 scale-95'
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
            <div className="absolute top-0 right-0 w-6 h-6 rounded-full bg-slate-800 border-2 border-sky-300/70 shadow-lg" />
            {/* Arm */}
            <div className="absolute top-3 right-3 w-1.5 h-16 sm:h-20 bg-gradient-to-b from-sky-100 to-slate-400 rounded-full shadow" />
            {/* Needle */}
            <div className="absolute bottom-1 right-2 w-3.5 h-5 bg-sky-400 rounded-sm shadow border border-sky-100 rotate-12" />
          </motion.div>
        </div>

        {/* Blue Vinyl Disc */}
        <motion.div
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-gradient-to-tr from-[#091b3a] via-[#0d2a58] to-[#0a2044] border-4 border-sky-400/50 shadow-[0_0_40px_rgba(56,189,248,0.45)] flex items-center justify-center overflow-hidden select-none"
        >
          {/* Shiny Vinyl Gloss Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-sky-200/15 to-transparent opacity-80 pointer-events-none" />
          
          {/* Realistic Grooves */}
          <div className="absolute inset-2 sm:inset-3 rounded-full border border-sky-300/20 pointer-events-none" />
          <div className="absolute inset-5 sm:inset-7 rounded-full border border-sky-300/15 pointer-events-none" />
          <div className="absolute inset-9 sm:inset-12 rounded-full border border-sky-300/20 pointer-events-none" />
          <div className="absolute inset-14 sm:inset-18 rounded-full border border-sky-300/15 pointer-events-none" />

          {/* Center Album Cover (User's blue.png) */}
          <div className="w-20 h-20 sm:w-26 sm:h-26 rounded-full border-2 border-sky-200/70 shadow-2xl relative z-10 overflow-hidden bg-sky-600 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/gambar/blue.png"
              alt="blue by yung kai"
              className="w-full h-full object-cover"
            />
            {/* Center Spindle Hole */}
            <div className="absolute w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#091b3a] border border-sky-100 shadow-inner" />
          </div>
        </motion.div>

        {/* Hover / Click to Play Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 rounded-full z-20 backdrop-blur-[2px]">
          <div className="w-14 h-14 rounded-full bg-sky-400 text-slate-950 flex items-center justify-center shadow-2xl">
            {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-0.5" />}
          </div>
        </div>
      </div>

      {/* Track info tag */}
      <div className="mt-4 flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-card border-sky-300/40 text-xs text-sky-100 shadow-lg">
        <Disc3 className={`w-3.5 h-3.5 text-sky-300 ${isPlaying ? 'animate-spin' : ''}`} />
        <span>yung kai • <strong>blue</strong></span>
        <button
          onClick={onTogglePlay}
          className="ml-1 px-3 py-0.5 rounded-full bg-sky-400/25 hover:bg-sky-400 hover:text-slate-950 text-sky-100 hover:font-semibold transition-all text-[11px] cursor-pointer"
        >
          {isPlaying ? 'Pause' : 'Play ♫'}
        </button>
      </div>
    </div>
  );
}
