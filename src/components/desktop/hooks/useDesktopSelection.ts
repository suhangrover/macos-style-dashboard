import { useState, useCallback } from 'react';

export function useDesktopSelection() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectionBox, setSelectionBox] = useState({ start: { x: 0, y: 0 }, current: { x: 0, y: 0 } });
  const [isSelecting, setIsSelecting] = useState(false);

  const startSelection = useCallback((e: React.MouseEvent) => {
    const start = { x: e.clientX, y: e.clientY };
    setSelectionBox({ start, current: start });
    setIsSelecting(true);
  }, []);

  const updateSelection = useCallback((e: React.MouseEvent) => {
    if (isSelecting) {
      setSelectionBox(prev => ({
        ...prev,
        current: { x: e.clientX, y: e.clientY }
      }));
    }
  }, [isSelecting]);

  const endSelection = useCallback(() => {
    setIsSelecting(false);
  }, []);

  return {
    selectedItems,
    setSelectedItems,
    selectionBox,
    isSelecting,
    startSelection,
    updateSelection,
    endSelection
  };
}