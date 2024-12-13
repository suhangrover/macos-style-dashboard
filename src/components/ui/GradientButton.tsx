import React from 'react';
import { motion } from 'framer-motion';
import { transitions } from '../animations/transitions';

interface GradientButtonProps {
  href: string;
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
};

export default function GradientButton({ href, variant = 'primary', children }: GradientButtonProps) {
  const baseClasses = "px-8 py-4 text-lg font-medium rounded-full transition-all duration-300";
  const variantClasses = {
    primary: "bg-white text-gray-900 hover:text-white",
    outline: "border-2 border-white text-white hover:bg-white hover:text-gray-900"
  };

  return (
    <motion.a
      href={href}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      transition={transitions.smooth}
      className={`${baseClasses} ${variantClasses[variant]}`}
      style={{
        backgroundColor: variant === 'primary' ? undefined : 'transparent'
      }}
    >
      {children}
    </motion.a>
  );
}