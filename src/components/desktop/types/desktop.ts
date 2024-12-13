import { LucideIcon } from 'lucide-react';

// ... (keep existing types) ...

export interface WindowState {
  position: Position;
  size: {
    width: number;
    height: number;
  };
  isMaximized: boolean;
  isMinimized: boolean;
}