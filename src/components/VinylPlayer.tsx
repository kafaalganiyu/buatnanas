'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Disc3, Sparkles } from 'lucide-react';

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
          className="group flex items-center gap-3 px-4 py-2 rounded-full glass-card hover:border-sky-400/50 transition-all duration-300 shadow-xl shadow-sky-950/50 cursor-pointer"
        >
          {/* Mini Vinyl */}
          <div className="relative w-8 h-8 flex items-center justify-center">
            <motion.div
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-950 via-slate-900 to-sky-900 border border-sky-400/40 flex items-center justify-center shadow-md relative overflow-hidden"
            >
              {/* Vinyl grooves */}
              <div className="absolute inset-1 rounded-full border border-sky-400/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-sky-400 border border-sky-200" />
            </motion.div>
            {isPlaying && (
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-sky-400 animate-ping" />
            )}
          </div>

          {/* Track details */}
          <div className="flex flex-col text-left">
            <span className="text-xs font-semibold text-sky-100 flex items-center gap-1">
              blue <span className="text-[10px] text-sky-300/70 font-normal">— yung kai</span>
            </span>
            <span className="text-[10px] text-sky-300/80">
              {isPlaying ? 'Now Playing ♫' : 'Paused ⏸'}
            </span>
          </div>

          {/* Play/Pause Button */}
          <div className="w-6 h-6 rounded-full bg-sky-400/20 flex items-center justify-center text-sky-300 group-hover:bg-sky-400 group-hover:text-slate-950 transition-colors ml-1">
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 ml-0.5" />}
          </div>
        </button>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center my-6 z-20">
      {/* Interactive Big Center Blue Vinyl Record */}
      <div className="relative group cursor-pointer" onClick={onTogglePlay}>
        {/* Glowing Atmosphere behind Vinyl */}
        <div
          className={`absolute -inset-4 rounded-full blur-2xl transition-all duration-700 pointer-events-none ${
            isPlaying ? 'bg-sky-500/25 scale-105' : 'bg-sky-500/10 scale-95'
          }`}
        />

        {/* Tonearm / Stylus */}
        <div className="absolute -top-6 -right-4 sm:-top-8 sm:-right-6 w-16 h-24 sm:w-20 sm:h-28 pointer-events-none z-30 transition-transform duration-700 origin-top-right">
          <motion.div
            animate={{ rotate: isPlaying ? 18 : 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="w-full h-full relative origin-[85%_15%]"
          >
            {/* Tonearm base */}
            <div className="absolute top-0 right-0 w-6 h-6 rounded-full bg-slate-800 border-2 border-sky-400/50 shadow-md" />
            {/* Tonearm metal stick */}
            <div className="absolute top-3 right-3 w-1.5 h-16 sm:h-20 bg-gradient-to-b from-sky-200 to-slate-400 rounded-full shadow" />
            {/* Needle cartridge head */}
            <div className="absolute bottom-1 right-2 w-3.5 h-5 bg-sky-500 rounded-sm shadow border border-sky-200/60 rotate-12" />
          </motion.div>
        </div>

        {/* Blue Vinyl Disc */}
        <motion.div
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-[#071326] border-4 border-sky-500/30 shadow-[0_0_35px_rgba(14,165,233,0.35)] flex items-center justify-center overflow-hidden select-none"
        >
          {/* Vinyl Shiny Sheen Reflection Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-sky-300/10 to-transparent opacity-70 pointer-events-none" />
          
          {/* Concentric Vinyl Grooves */}
          <div className="absolute inset-2 sm:inset-3 rounded-full border border-sky-400/15 pointer-events-none" />
          <div className="absolute inset-5 sm:inset-7 rounded-full border border-sky-400/10 pointer-events-none" />
          <div className="absolute inset-9 sm:inset-12 rounded-full border border-sky-400/15 pointer-events-none" />
          <div className="absolute inset-14 sm:inset-18 rounded-full border border-sky-400/10 pointer-events-none" />

          {/* Center Blue Label */}
          <div className="w-18 h-18 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-sky-600 to-blue-500 border-2 border-sky-200/50 flex flex-col items-center justify-center p-2 text-center shadow-inner relative z-10">
            <span className="text-[9px] sm:text-[11px] font-bold text-white tracking-wider uppercase font-serif drop-shadow">
              blue
            </span>
            <span className="text-[7px] sm:text-[9px] text-sky-100 font-medium tracking-tight">
              yung kai
            </span>
            {/* Center Spindle Hole */}
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#071326] border border-sky-200 mt-1 shadow-inner" />
          </div>
        </motion.div>

        {/* Center Hover / Play Indicator Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 rounded-full z-20 backdrop-blur-[2px]">
          <div className="w-12 h-12 rounded-full bg-sky-400 text-slate-950 flex items-center justify-center shadow-xl">
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
          </div>
        </div>
      </div>

      {/* Track info bar below vinyl */}
      <div className="mt-4 flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-card border-sky-400/30 text-xs text-sky-200">
        <Disc3 className={`w-3.5 h-3.5 text-sky-400 ${isPlaying ? 'animate-spin' : ''}`} />
        <span>yung kai — <strong>blue</strong></span>
        <button
          onClick={onTogglePlay}
          className="ml-1 px-2.5 py-0.5 rounded-full bg-sky-400/20 hover:bg-sky-400 hover:text-slate-950 text-sky-200 transition-all font-medium text-[11px] cursor-pointer"
        >
          {isPlaying ? 'Pause' : 'Play ♫'}
        </button>
      </div>
    </div>
  );
}
