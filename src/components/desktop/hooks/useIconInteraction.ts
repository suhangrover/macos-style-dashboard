import { useCallback } from 'react';
import { useDesktopContext } from '../context/DesktopContext';

export function useIconInteraction() {
  const { setActiveWindow } = useDesktopContext();

  const handleIconClick = useCallback((
    e: React.MouseEvent,
    label: string,
    external: boolean | undefined,
    onSelect: () => void
  ) => {
    e.stopPropagation();
    onSelect();
    if (!external) {
      setActiveWindow(label);
    }
  }, [setActiveWindow]);

  const handleIconDoubleClick = useCallback((
    e: React.MouseEvent,
    onSelect: () => void
  ) => {
    e.stopPropagation();
    onSelect();
  }, []);

  return {
    handleIconClick,
    handleIconDoubleClick
  };
}