import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ICON_CONFIGS, ICON_TYPES } from './constants/icons';
import { useIconInteraction } from './hooks/useIconInteraction';
import type { DesktopIcon as DesktopIconType } from './types/desktop';

interface DesktopIconProps extends DesktopIconType {
  isSelected: boolean;
  onSelect: () => void;
  onDoubleClick?: () => void;
}

export default function DesktopIcon({ 
  type, 
  label, 
  to, 
  position, 
  external,
  isSelected,
  onSelect,
  onDoubleClick
}: DesktopIconProps) {
  const config = ICON_CONFIGS[label];
  const Icon = config.icon;
  const { handleIconClick, handleIconDoubleClick } = useIconInteraction();
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handleIconClick(e, label, external, onSelect);
  };

  const handleDoubleClickEvent = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onDoubleClick) {
      onDoubleClick();
    } else {
      handleIconDoubleClick(e, onSelect);
    }
  };
  
  const IconWrapper = external ? 'a' : type === ICON_TYPES.FOLDER ? 'div' : Link;
  const iconProps = external ? { 
    href: to, 
    target: "_blank", 
    rel: "noopener noreferrer" 
  } : type === ICON_TYPES.FOLDER ? {} : { to };
  
  return (
    <motion.div
      className="absolute flex flex-col items-center w-[90px] cursor-default"
      initial={position}
      onClick={handleClick}
      onDoubleClick={handleDoubleClickEvent}
      whileHover={{ scale: 1.02 }}
    >
      <IconWrapper 
        {...iconProps}
        className="flex flex-col items-center group"
      >
        <motion.div
          className="relative w-[52px] h-[52px] rounded-xl shadow-lg backdrop-blur-sm mb-1"
          whileTap={{ scale: 0.95 }}
          style={{
            background: `linear-gradient(135deg, ${config.color}, ${config.color}dd)`,
            boxShadow: isSelected ? `0 0 0 2px #3b82f6, 0 4px 20px ${config.color}40` : `0 4px 20px ${config.color}40`
          }}
        >
          <Icon className="w-7 h-7 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
        </motion.div>
        
        <span className={`
          px-2 py-0.5 text-[12px] text-white/90 
          text-center rounded-[4px] select-none
          font-medium tracking-tight
          transition-all duration-150
          ${isSelected ? 'bg-blue-500/50 backdrop-blur-sm text-white' : 'bg-transparent hover:bg-white/10'}
        `}>
          {label}
        </span>
      </IconWrapper>
    </motion.div>
  );
}