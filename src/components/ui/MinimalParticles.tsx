import React from 'react';
import { motion } from 'framer-motion';

const MinimalParticle = () => {
  const randomX = Math.random() * window.innerWidth;
  const randomY = Math.random() * window.innerHeight;
  
  return (
    <motion.div
      className="absolute w-1 h-1 bg-white rounded-full"
      initial={{ 
        x: randomX,
        y: randomY,
        opacity: 0 
      }}
      animate={{
        opacity: [0, 0.2, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};

export default function MinimalParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <MinimalParticle key={i} />
      ))}
    </div>
  );
}