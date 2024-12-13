import { useState, useCallback, useEffect } from 'react';

interface ContextMenuPosition {
  x: number;
  y: number;
}

export function useContextMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const [position, setPosition] = useState<ContextMenuPosition>({ x: 0, y: 0 });

  const handleContextMenu = useCallback((event: MouseEvent) => {
    event.preventDefault();
    setShowMenu(true);
    setPosition({ x: event.clientX, y: event.clientY });
  }, []);

  const closeMenu = useCallback(() => {
    setShowMenu(false);
  }, []);

  useEffect(() => {
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('click', closeMenu);
    
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('click', closeMenu);
    };
  }, [handleContextMenu, closeMenu]);

  return { showMenu, position, closeMenu };
}