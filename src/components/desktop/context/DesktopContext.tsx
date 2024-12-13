import React, { createContext, useContext, useState } from 'react';

interface DesktopContextType {
  activeWindow: string | null;
  setActiveWindow: (window: string | null) => void;
}

const DesktopContext = createContext<DesktopContextType | undefined>(undefined);

export function DesktopProvider({ children }: { children: React.ReactNode }) {
  const [activeWindow, setActiveWindow] = useState<string | null>(null);

  return (
    <DesktopContext.Provider value={{ activeWindow, setActiveWindow }}>
      {children}
    </DesktopContext.Provider>
  );
}

export function useDesktopContext() {
  const context = useContext(DesktopContext);
  if (context === undefined) {
    throw new Error('useDesktopContext must be used within a DesktopProvider');
  }
  return context;
}