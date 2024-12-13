import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { transitions } from '../animations/transitions';

interface FeatureCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

const cardVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 }
};

const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: { scale: 1.1, rotate: 360 }
};

export default function FeatureCard({ name, description, icon: Icon, color }: FeatureCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      transition={transitions.smooth}
      className="text-center group relative"
    >
      <motion.div
        variants={iconVariants}
        transition={transitions.spring}
        className={`relative flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-r ${color} text-white mx-auto mb-6 shadow-lg`}
      >
        <Icon className="h-10 w-10" />
        <motion.div
          className="absolute inset-0 bg-white rounded-2xl"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          transition={transitions.hover}
          style={{ opacity: 0.2 }}
        />
      </motion.div>
      
      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{name}</h3>
      <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
        {description}
      </p>
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-xl -z-10"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={transitions.hover}
      />
    </motion.div>
  );
}