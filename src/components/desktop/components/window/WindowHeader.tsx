import React from 'react';
import WindowControls from './WindowControls';

interface WindowHeaderProps {
  title: string;
  onClose: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
}

export default function WindowHeader({ title, onClose, onMinimize, onMaximize }: WindowHeaderProps) {
  const handleAction = (action: (e: React.MouseEvent) => void) => (e: React.MouseEvent) => {
    e.stopPropagation();
    action(e);
  };

  return (
    <div className="h-10 bg-gray-900/50 border-b border-white/10 flex items-center px-4 gap-2 cursor-grab active:cursor-grabbing">
      <WindowControls
        onClose={handleAction((e) => onClose())}
        onMinimize={handleAction((e) => onMinimize?.())}
        onMaximize={handleAction((e) => onMaximize?.())}
      />
      <span className="ml-4 text-white/80 text-sm font-medium select-none">{title}</span>
    </div>
  );
}