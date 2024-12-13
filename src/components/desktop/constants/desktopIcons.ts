import { ICON_TYPES, ICON_CONFIGS } from './icons';
import type { DesktopIcon } from '../types/desktop';

export const desktopIcons: DesktopIcon[] = [
  {
    type: ICON_TYPES.LINK,
    label: 'Byte Original',
    to: 'https://byteclub.co.in',
    position: { x: 20, y: 20 },
    external: true
  },
  {
    type: ICON_TYPES.FOLDER,
    label: 'Byte.IT',
    to: '#',
    position: { x: 20, y: 120 }
  },
  {
    type: ICON_TYPES.FOLDER,
    label: 'QuickByte',
    to: '#',
    position: { x: 20, y: 220 }
  }
];