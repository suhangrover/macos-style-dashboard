import { useState, useCallback } from 'react';
import type { Position, WindowState } from '../types/desktop';

interface UseWindowOptions {
  initialPosition?: Position;
  initialSize?: { width: number; height: number };
}

export function useWindow({ 
  initialPosition = { x: 0, y: 0 },
  initialSize = { width: 600, height: 400 }
}: UseWindowOptions = {}) {
  const [state, setState] = useState<WindowState>({
    position: initialPosition,
    size: initialSize,
    isMaximized: false,
    isMinimized: false
  });

  const maximize = useCallback(() => {
    setState(prev => ({
      ...prev,
      isMaximized: !prev.isMaximized,
      position: prev.isMaximized ? initialPosition : { x: 0, y: 0 },
      size: prev.isMaximized ? initialSize : {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }));
  }, [initialPosition, initialSize]);

  const minimize = useCallback(() => {
    setState(prev => ({
      ...prev,
      isMinimized: !prev.isMinimized
    }));
  }, []);

  const updatePosition = useCallback((position: Position) => {
    setState(prev => ({
      ...prev,
      position
    }));
  }, []);

  return {
    ...state,
    maximize,
    minimize,
    updatePosition
  };
}