import { Code, FileText, Cpu, Presentation, Rocket, Zap } from 'lucide-react';
import type { FolderContent } from '../types/desktop';

export const BYTE_IT_CONTENTS: FolderContent[] = [
  {
    label: 'crypt.IT',
    icon: Cpu,
    to: '#',
    position: { x: 20, y: 20 }
  },
  {
    label: 'pitch.IT',
    icon: Presentation,
    to: '#',
    position: { x: 20, y: 100 }
  },
  {
    label: 'build.IT',
    icon: Code,
    to: '#',
    position: { x: 20, y: 180 }
  }
];

export const QUICK_BYTE_CONTENTS: FolderContent[] = [
  {
    label: 'QuickPitch',
    icon: Rocket,
    to: '#',
    position: { x: 20, y: 20 }
  },
  {
    label: 'QuickBuild',
    icon: Code,
    to: '#',
    position: { x: 20, y: 100 }
  },
  {
    label: 'QuickCrypt',
    icon: Zap,
    to: '#',
    position: { x: 20, y: 180 }
  }
];

export const folderContents = {
  'Byte.IT': BYTE_IT_CONTENTS,
  'QuickByte': QUICK_BYTE_CONTENTS
} as const;