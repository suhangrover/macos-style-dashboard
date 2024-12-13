import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { desktopIcons } from './constants/desktopIcons';
import { useContextMenu } from './hooks/useContextMenu';
import { useDesktopSelection } from './hooks/useDesktopSelection';
import { useWindowManager } from './hooks/useWindowManager';
import { ICON_TYPES } from './constants/icons';
import DesktopIcon from './DesktopIcon';
import MenuBar from './MenuBar';
import Dock from './Dock';
import Wallpaper from './Wallpaper';
import ContextMenu from './components/ContextMenu';
import SelectionBox from './components/SelectionBox';
import FolderWindow from './components/FolderWindow';
import Credits from './components/Credits';
import { DesktopProvider } from './context/DesktopContext';

export default function Desktop() {
  const { showMenu, position, closeMenu } = useContextMenu();
  const {
    selectedItems,
    setSelectedItems,
    selectionBox,
    isSelecting,
    startSelection,
    updateSelection,
    endSelection
  } = useDesktopSelection();
  const { openWindows, openWindow, closeWindow } = useWindowManager();

  const handleIconDoubleClick = (icon: typeof desktopIcons[0]) => {
    if (icon.type === ICON_TYPES.FOLDER) {
      openWindow(icon.label);
    } else if (icon.external) {
      window.open(icon.to, '_blank');
    }
  };

  return (
    <DesktopProvider>
      <div 
        className="relative w-full h-screen overflow-hidden select-none bg-black"
        onMouseDown={startSelection}
        onMouseMove={updateSelection}
        onMouseUp={endSelection}
      >
        <Wallpaper />
        <MenuBar />
        
        <div className="relative z-10 pt-8">
          {desktopIcons.map((icon) => (
            <DesktopIcon 
              key={icon.label} 
              {...icon}
              isSelected={selectedItems.includes(icon.label)}
              onSelect={() => {
                setSelectedItems(prev => 
                  prev.includes(icon.label) 
                    ? prev.filter(item => item !== icon.label)
                    : [...prev, icon.label]
                );
              }}
              onDoubleClick={() => handleIconDoubleClick(icon)}
            />
          ))}
        </div>

        <AnimatePresence>
          {openWindows.map((windowName) => (
            <FolderWindow
              key={windowName}
              folderName={windowName}
              onClose={() => closeWindow(windowName)}
            />
          ))}
        </AnimatePresence>

        <SelectionBox
          start={selectionBox.start}
          current={selectionBox.current}
          isSelecting={isSelecting}
        />

        <ContextMenu
          show={showMenu}
          position={position}
          items={[
            { label: 'New Folder', action: () => console.log('New Folder'), shortcut: '⌘N' },
            { label: 'Get Info', action: () => console.log('Get Info'), shortcut: '⌘I' },
            { label: 'Change Desktop Background...', action: () => console.log('Change Background') },
          ]}
        />

        <Dock />
        <Credits />
      </div>
    </DesktopProvider>
  );
}