import React from 'react';
import { motion } from 'framer-motion';
import type { FolderContent } from '../../types/desktop';

interface FolderItemProps {
  item: FolderContent;
  onClick?: () => void;
}

export default function FolderItem({ item, onClick }: FolderItemProps) {
  const Icon = item.icon;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center group cursor-pointer"
      onClick={onClick}
    >
      <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-2 group-hover:bg-blue-500/30 transition-colors">
        <Icon className="w-8 h-8 text-white/80 group-hover:text-white transition-colors" />
      </div>
      <span className="text-white/80 text-sm text-center group-hover:text-white transition-colors">
        {item.label}
      </span>
      <span className="text-xs text-white/50 text-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {item.description}
      </span>
    </motion.div>
  );
}