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
    const items: Particle[] = [];
    const count = 40;

    for (let i = 0; i < count; i++) {
      const typeRand = Math.random();
      let type: 'heart' | 'star' | 'circle' = 'circle';
      if (typeRand > 0.6) type = 'heart';
      else if (typeRand > 0.3) type = 'star';

      items.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: type === 'heart' ? Math.random() * 16 + 12 : Math.random() * 7 + 2,
        duration: Math.random() * 12 + 10,
        delay: Math.random() * 6,
        opacity: Math.random() * 0.5 + 0.25,
        type,
      });
    }

    setParticles(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Luminous Dreamy Romantic Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e274d] via-[#0a1e3d] to-[#07162d]" />

      {/* Bright Sky Blue & Cyan Atmospheric Light Orbs */}
      <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-sky-400/25 via-blue-600/20 to-transparent rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute top-[35%] -left-[10%] w-[650px] h-[650px] bg-gradient-radial from-cyan-400/25 via-sky-600/15 to-transparent rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2.5s' }} />
      <div className="absolute bottom-[0%] -right-[10%] w-[700px] h-[700px] bg-gradient-radial from-sky-500/25 via-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '4.5s' }} />

      {/* Floating Gentle Elements */}
      {particles.map((p) => {
        if (p.type === 'heart') {
          return (
            <motion.div
              key={p.id}
              className="absolute text-sky-300 select-none drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                fontSize: `${p.size}px`,
                opacity: p.opacity,
              }}
              animate={{
                y: [0, -110, -220],
                x: [0, (p.id % 2 === 0 ? 25 : -25), 0],
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
              💙
            </motion.div>
          );
        }

        if (p.type === 'star') {
          return (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-white"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                boxShadow: '0 0 12px rgba(224, 242, 254, 0.9)',
              }}
              animate={{
                scale: [0.7, 1.5, 0.7],
                opacity: [p.opacity * 0.5, p.opacity, p.opacity * 0.5],
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
            className="absolute rounded-full bg-sky-300/50 blur-[1px]"
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

      {/* Gentle Vignette */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.35)]" />
    </div>
  );
}
