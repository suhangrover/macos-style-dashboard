import { useState, useCallback } from 'react';
import type { Position } from '../types/desktop';

const WINDOW_BOUNDS_PADDING = 20;

export function useWindowDrag(initialPosition: Position = { x: 0, y: 0 }) {
  const [position, setPosition] = useState<Position>(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState<Position>({ x: 0, y: 0 });

  const constrainPosition = useCallback((pos: Position) => {
    const maxX = window.innerWidth - WINDOW_BOUNDS_PADDING;
    const maxY = window.innerHeight - WINDOW_BOUNDS_PADDING;

    return {
      x: Math.min(Math.max(WINDOW_BOUNDS_PADDING, pos.x), maxX),
      y: Math.min(Math.max(WINDOW_BOUNDS_PADDING, pos.y), maxY)
    };
  }, []);

  const handleDragStart = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  }, [position]);

  const handleDrag = useCallback((e: MouseEvent) => {
    if (isDragging) {
      const newPosition = {
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      };
      setPosition(constrainPosition(newPosition));
    }
  }, [isDragging, dragOffset, constrainPosition]);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  return {
    position,
    isDragging,
    handleDragStart,
    handleDrag,
    handleDragEnd
  };
}