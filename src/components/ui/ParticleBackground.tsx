import React from 'react';
import { motion } from 'framer-motion';
import { transitions } from '../animations/transitions';

interface ParticleProps {
  index: number;
  isGlowing?: boolean;
}

const Particle = ({ index, isGlowing = false }: ParticleProps) => {
  const size = isGlowing ? 'w-4 h-4' : 'w-2 h-2';
  const className = `absolute ${size} ${isGlowing ? 'bg-indigo-500 blur-sm' : 'bg-white'} rounded-full`;

  return (
    <motion.div
      key={`particle-${index}`}
      className={className}
      initial={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: isGlowing ? 0 : Math.random() * 0.5 + 0.2,
        scale: isGlowing ? 1 : Math.random() * 0.5 + 0.5
      }}
      animate={{
        y: isGlowing ? [null, Math.random() * window.innerHeight] : [null, '-100vh'],
        x: isGlowing ? [null, Math.random() * window.innerWidth] : undefined,
        opacity: isGlowing ? [0, 0.6, 0] : [null, 0],
        scale: isGlowing ? undefined : [null, 0]
      }}
      transition={{
        duration: Math.random() * (isGlowing ? 15 : 10) + (isGlowing ? 15 : 10),
        repeat: Infinity,
        ease: 'linear'
      }}
    />
  );
};

export default function ParticleBackground() {
  return (
    <>
      {[...Array(50)].map((_, i) => (
        <Particle key={i} index={i} />
      ))}
      {[...Array(10)].map((_, i) => (
        <Particle key={`glow-${i}`} index={i} isGlowing />
      ))}
    </>
  );
}