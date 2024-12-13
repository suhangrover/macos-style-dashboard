import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface DockItemProps {
  icon: LucideIcon;
  label: string;
  to: string;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

export default function DockItem({ 
  icon: Icon, 
  label, 
  to, 
  isHovered,
  onHover,
  onLeave 
}: DockItemProps) {
  return (
    <Link to={to}>
      <motion.div
        className="group relative"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        animate={{
          y: isHovered ? -8 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 20,
          mass: 0.5 
        }}
      >
        <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg group-hover:border-white/40">
          <Icon className="w-6 h-6 text-white" />
        </div>
        
        <motion.div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.15 }}
        >
          <span className="px-2 py-1 text-xs text-white bg-black/50 backdrop-blur-md rounded-md whitespace-nowrap">
            {label}
          </span>
        </motion.div>
      </motion.div>
    </Link>
  );
}