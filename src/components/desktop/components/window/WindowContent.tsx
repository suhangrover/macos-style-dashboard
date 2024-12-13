import React from 'react';
import { useNavigate } from 'react-router-dom';
import { folderContents } from '../../constants/folderContents';
import FolderItem from './FolderItem';

interface WindowContentProps {
  folderName: string;
}

export default function WindowContent({ folderName }: WindowContentProps) {
  const navigate = useNavigate();
  const contents = folderContents[folderName as keyof typeof folderContents] || [];

  return (
    <div className="p-6 h-[calc(100%-2.5rem)] overflow-y-auto">
      <div className="grid grid-cols-4 gap-6">
        {contents.map((item) => (
          <FolderItem
            key={item.label}
            item={item}
            onClick={() => navigate(item.to)}
          />
        ))}
      </div>
    </div>
  );
}