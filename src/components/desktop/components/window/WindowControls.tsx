import React from 'react';
import { X, Minus, Plus } from 'lucide-react';

interface WindowControlProps {
  icon: typeof X | typeof Minus | typeof Plus;
  color: string;
  hoverColor: string;
  iconColor: string;
  onClick: (e: React.MouseEvent) => void;
}

function WindowControl({ icon: Icon, color, hoverColor, iconColor, onClick }: WindowControlProps) {
  return (
    <button
      onClick={onClick}
      className={`w-3 h-3 rounded-full ${color} ${hoverColor} transition-colors flex items-center justify-center group`}
    >
      <Icon className={`w-2 h-2 ${iconColor} opacity-0 group-hover:opacity-100 transition-opacity`} />
    </button>
  );
}

interface WindowControlsProps {
  onClose: (e: React.MouseEvent) => void;
  onMinimize: (e: React.MouseEvent) => void;
  onMaximize: (e: React.MouseEvent) => void;
}

export default function WindowControls({ onClose, onMinimize, onMaximize }: WindowControlsProps) {
  return (
    <div className="flex items-center gap-2">
      <WindowControl
        icon={X}
        color="bg-red-500"
        hoverColor="hover:bg-red-600"
        iconColor="text-red-900"
        onClick={onClose}
      />
      <WindowControl
        icon={Minus}
        color="bg-yellow-500"
        hoverColor="hover:bg-yellow-600"
        iconColor="text-yellow-900"
        onClick={onMinimize}
      />
      <WindowControl
        icon={Plus}
        color="bg-green-500"
        hoverColor="hover:bg-green-600"
        iconColor="text-green-900"
        onClick={onMaximize}
      />
    </div>
  );
}