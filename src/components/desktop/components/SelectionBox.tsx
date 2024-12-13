import React from 'react';

interface SelectionBoxProps {
  start: { x: number; y: number };
  current: { x: number; y: number };
  isSelecting: boolean;
}

export default function SelectionBox({ start, current, isSelecting }: SelectionBoxProps) {
  if (!isSelecting) return null;

  const style = {
    left: Math.min(start.x, current.x),
    top: Math.min(start.y, current.y),
    width: Math.abs(current.x - start.x),
    height: Math.abs(current.y - start.y),
  };

  return (
    <div
      className="fixed border-2 border-blue-500/50 bg-blue-500/20 rounded-sm pointer-events-none z-40"
      style={style}
    />
  );
}