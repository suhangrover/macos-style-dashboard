import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { transitions } from '../animations/transitions';

interface AnimatedIconProps {
  Icon: LucideIcon;
  delay?: number;
  color?: string;
}

const iconVariants = {
  initial: { scale: 0, rotate: -180 },
  animate: { scale: 1, rotate: 0 },
  hover: { scale: 1.2, rotate: 360 }
};

export default function AnimatedIcon({ Icon, delay = 0, color = 'white' }: AnimatedIconProps) {
  return (
    <motion.div
      variants={iconVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      transition={{ ...transitions.spring, delay }}
      className="relative group"
    >
      <Icon className={`h-16 w-16 text-${color}`} />
      <motion.div
        className="absolute inset-0 bg-white rounded-full -z-10"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.2 }}
        transition={transitions.hover}
      />
    </motion.div>
  );
}