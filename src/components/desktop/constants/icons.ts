import { ExternalLink, Folder } from 'lucide-react';
import { IconType } from '../types/desktop';

export const ICON_TYPES = {
  FOLDER: 'folder',
  LINK: 'link'
} as const;

export const ICON_CONFIGS: Record<string, { icon: IconType; color: string }> = {
  'Byte Original': { icon: ExternalLink, color: '#10B981' },
  'Byte.IT': { icon: Folder, color: '#3B82F6' },
  'QuickByte': { icon: Folder, color: '#3B82F6' }
} as const;

export const folderContents = {
  'Byte.IT': [
    { label: 'Documents', icon: Folder, to: '/documents', position: { x: 20, y: 20 } },
    { label: 'Projects', icon: Folder, to: '/projects', position: { x: 20, y: 100 } },
    { label: 'Resources', icon: Folder, to: '/resources', position: { x: 20, y: 180 } }
  ],
  'QuickByte': [
    { label: 'Templates', icon: Folder, to: '/templates', position: { x: 20, y: 20 } },
    { label: 'Tutorials', icon: Folder, to: '/tutorials', position: { x: 20, y: 100 } },
    { label: 'Workshops', icon: Folder, to: '/workshops', position: { x: 20, y: 180 } }
  ]
} as const;