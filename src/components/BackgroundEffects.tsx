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
  type: 'heart' | 'star' | 'circle';
}

export default function BackgroundEffects() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate gentle background particles
    const items: Particle[] = [];
    const count = 35; // optimal for both mobile and desktop

    for (let i = 0; i < count; i++) {
      const typeRand = Math.random();
      let type: 'heart' | 'star' | 'circle' = 'circle';
      if (typeRand > 0.65) type = 'heart';
      else if (typeRand > 0.35) type = 'star';

      items.push({
        id: i,
        x: Math.random() * 100, // percentage
        y: Math.random() * 100, // percentage
        size: type === 'heart' ? Math.random() * 14 + 10 : Math.random() * 6 + 2,
        duration: Math.random() * 14 + 12,
        delay: Math.random() * 8,
        opacity: Math.random() * 0.45 + 0.15,
        type,
      });
    }

    setParticles(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Deep Romantic Background Layer */}
      <div className="absolute inset-0 bg-[#040916]" />

      {/* Radial Atmospheric Lighting Orbs */}
      <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-radial from-sky-600/20 via-blue-900/15 to-transparent rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute top-[40%] -left-[15%] w-[600px] h-[600px] bg-gradient-radial from-blue-700/15 via-indigo-950/10 to-transparent rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[5%] -right-[15%] w-[650px] h-[650px] bg-gradient-radial from-cyan-600/15 via-blue-950/20 to-transparent rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '4s' }} />

      {/* Floating Gentle Elements */}
      {particles.map((p) => {
        if (p.type === 'heart') {
          return (
            <motion.div
              key={p.id}
              className="absolute text-sky-400 select-none"
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
                rotate: [0, (p.id % 2 === 0 ? 25 : -25), 0],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: 'easeInOut',
              }}
            >
              💙
            </motion.div>
          );
        }

        if (p.type === 'star') {
          return (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-cyan-200"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                boxShadow: '0 0 10px rgba(186, 230, 253, 0.8)',
              }}
              animate={{
                scale: [0.6, 1.4, 0.6],
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
            className="absolute rounded-full bg-sky-300/40 blur-[1px]"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            animate={{
              y: [0, -70, -140],
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

      {/* Subtle Vignette Overlay for focus & intimacy */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none shadow-[inset_0_0_120px_rgba(0,0,0,0.6)]" />
    </div>
  );
}
