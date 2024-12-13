import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContextMenuItem {
  label: string;
  action: () => void;
  shortcut?: string;
}

interface ContextMenuProps {
  show: boolean;
  position: { x: number; y: number };
  items: ContextMenuItem[];
}

export default function ContextMenu({ show, position, items }: ContextMenuProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.1 }}
          className="fixed z-50"
          style={{ left: position.x, top: position.y }}
        >
          <div className="min-w-[200px] py-2 bg-gray-800/80 backdrop-blur-xl rounded-lg shadow-xl border border-white/10">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="w-full px-4 py-1.5 text-sm text-white hover:bg-white/10 flex justify-between items-center"
              >
                <span>{item.label}</span>
                {item.shortcut && (
                  <span className="text-xs text-gray-400">{item.shortcut}</span>
                )}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}