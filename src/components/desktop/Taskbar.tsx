import React from 'react';
import { Clock } from 'lucide-react';

export default function Taskbar() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-12 bg-black/40 backdrop-blur-lg border-t border-white/10 flex items-center justify-between px-4 z-50">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-white/80" />
      </div>
      <div className="flex items-center space-x-4 text-white/80">
        <Clock className="w-4 h-4" />
        <span className="text-sm">
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
}