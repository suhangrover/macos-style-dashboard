import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DockItem from './components/DockItem';
import { dockItems } from './constants/dockItems';

export default function Dock() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        className="flex items-end gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {dockItems.map((item, index) => (
          <DockItem
            key={item.label}
            {...item}
            isHovered={hoveredIndex === index}
            onHover={() => setHoveredIndex(index)}
            onLeave={() => setHoveredIndex(null)}
          />
        ))}
      </motion.div>
    </div>
  );
}