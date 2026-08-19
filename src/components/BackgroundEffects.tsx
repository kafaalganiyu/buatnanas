'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  type: 'heart' | 'star' | 'sparkle' | 'web';
}

export default function BackgroundEffects() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const items: Particle[] = [];
    const count = 35;

    for (let i = 0; i < count; i++) {
      const typeRand = Math.random();
      let type: 'heart' | 'star' | 'sparkle' | 'web' = 'sparkle';
      if (typeRand > 0.65) type = 'heart';
      else if (typeRand > 0.4) type = 'star';
      else if (typeRand > 0.25) type = 'web';

      items.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: type === 'heart' ? Math.random() * 16 + 12 : Math.random() * 8 + 3,
        duration: Math.random() * 12 + 10,
        delay: Math.random() * 6,
        opacity: Math.random() * 0.4 + 0.2,
        type,
      });
    }

    setParticles(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Clean White & Soft Pink Pearl Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff] via-[#fdf2f8] to-[#f8fafc]" />

      {/* Spider-Gwen Style Atmospheric Soft Pink & Sky Blue Glow Orbs */}
      <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-gradient-radial from-pink-300/35 via-rose-200/20 to-transparent rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute top-[35%] -left-[10%] w-[600px] h-[600px] bg-gradient-radial from-pink-200/30 via-sky-200/20 to-transparent rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[0%] -right-[10%] w-[650px] h-[650px] bg-gradient-radial from-rose-300/30 via-pink-200/25 to-transparent rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '4s' }} />

      {/* Subtle Spiderweb Decorative SVG in Top Left Corner */}
      <svg
        className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 text-pink-300/25 pointer-events-none"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M0,0 L200,0 M0,0 L180,90 M0,0 L140,140 M0,0 L90,180 M0,0 L0,200" />
        <path d="M40,0 Q35,20 0,40" />
        <path d="M80,0 Q70,40 0,80" />
        <path d="M120,0 Q105,60 0,120" />
        <path d="M160,0 Q140,80 0,160" />
        <path d="M200,0 Q175,100 0,200" />
      </svg>

      {/* Subtle Spiderweb Decorative SVG in Top Right Corner */}
      <svg
        className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 text-pink-300/25 pointer-events-none transform -scale-x-100"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M0,0 L200,0 M0,0 L180,90 M0,0 L140,140 M0,0 L90,180 M0,0 L0,200" />
        <path d="M40,0 Q35,20 0,40" />
        <path d="M80,0 Q70,40 0,80" />
        <path d="M120,0 Q105,60 0,120" />
        <path d="M160,0 Q140,80 0,160" />
        <path d="M200,0 Q175,100 0,200" />
      </svg>

      {/* Floating Gentle Spider-Man / Romance Elements */}
      {particles.map((p) => {
        if (p.type === 'heart') {
          return (
            <motion.div
              key={p.id}
              className="absolute text-pink-400 select-none drop-shadow-[0_2px_8px_rgba(244,114,182,0.4)]"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                fontSize: `${p.size}px`,
                opacity: p.opacity,
              }}
              animate={{
                y: [0, -100, -200],
                x: [0, (p.id % 2 === 0 ? 20 : -20), 0],
                opacity: [0, p.opacity, 0],
                rotate: [0, (p.id % 2 === 0 ? 20 : -20), 0],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: 'easeInOut',
              }}
            >
              💖
            </motion.div>
          );
        }

        if (p.type === 'web') {
          return (
            <motion.div
              key={p.id}
              className="absolute text-pink-300/40 select-none text-xs font-mono"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                opacity: p.opacity * 0.8,
              }}
              animate={{
                y: [0, -70, -140],
                rotate: [0, 45, 90],
                opacity: [0, p.opacity, 0],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: 'easeInOut',
              }}
            >
              🕸️
            </motion.div>
          );
        }

        if (p.type === 'star') {
          return (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-pink-400"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                boxShadow: '0 0 10px rgba(244, 114, 182, 0.6)',
              }}
              animate={{
                scale: [0.7, 1.4, 0.7],
                opacity: [p.opacity * 0.4, p.opacity, p.opacity * 0.4],
              }}
              transition={{
                duration: p.duration / 3,
                repeat: Infinity,
                delay: p.delay,
                ease: 'easeInOut',
              }}
            />
          );
        }

        return (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-rose-300/50 blur-[1px]"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            animate={{
              y: [0, -80, -160],
              opacity: [0, p.opacity, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </div>
  );
}
