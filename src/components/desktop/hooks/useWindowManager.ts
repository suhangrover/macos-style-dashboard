import { useState } from 'react';

export function useWindowManager() {
  const [openWindows, setOpenWindows] = useState<string[]>([]);

  const openWindow = (windowName: string) => {
    setOpenWindows((prev) => [...prev, windowName]);
  };

  const closeWindow = (windowName: string) => {
    setOpenWindows((prev) => prev.filter((name) => name !== windowName));
  };

  const isWindowOpen = (windowName: string) => {
    return openWindows.includes(windowName);
  };

  return {
    openWindows,
    openWindow,
    closeWindow,
    isWindowOpen
  };
}