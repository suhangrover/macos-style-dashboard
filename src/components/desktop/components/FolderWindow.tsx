import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWindowDrag } from '../hooks/useWindowDrag';
import WindowHeader from './window/WindowHeader';
import WindowContent from './window/WindowContent';

interface FolderWindowProps {
  folderName: string;
  onClose: () => void;
}

export default function FolderWindow({ folderName, onClose }: FolderWindowProps) {
  const {
    position,
    isDragging,
    handleDragStart,
    handleDrag,
    handleDragEnd
  } = useWindowDrag({
    x: window.innerWidth / 2 - 300,
    y: window.innerHeight / 2 - 200
  });

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleDrag);
      window.addEventListener('mouseup', handleDragEnd);
      return () => {
        window.removeEventListener('mousemove', handleDrag);
        window.removeEventListener('mouseup', handleDragEnd);
      };
    }
  }, [isDragging, handleDrag, handleDragEnd]);

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        x: position.x,
        y: position.y,
      }}
      exit={{ scale: 0.95, opacity: 0 }}
      transition={{ type: "spring", bounce: 0.2 }}
      className="absolute w-[600px] bg-gray-800/80 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 overflow-hidden"
      style={{ 
        cursor: isDragging ? 'grabbing' : 'default',
        zIndex: isDragging ? 50 : 40
      }}
    >
      <div onMouseDown={handleDragStart}>
        <WindowHeader 
          title={folderName}
          onClose={onClose}
          onMinimize={() => console.log('minimize')}
          onMaximize={() => console.log('maximize')}
        />
      </div>
      <WindowContent folderName={folderName} />
    </motion.div>
  );
}