import { Home, FolderOpen, Users, Mail, Settings } from 'lucide-react';

export const dockItems = [
  { icon: Home, label: 'Home', to: '#' },
  { icon: FolderOpen, label: 'Resources', to: '#' },
  { icon: Users, label: 'Team', to: '#' },
  { icon: Mail, label: 'Contact', to: '#' },
  { icon: Settings, label: 'Settings', to: '#' },
] as const;