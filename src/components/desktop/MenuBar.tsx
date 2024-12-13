import React, { useState, useEffect } from 'react';
import { Apple, Wifi, Battery, Volume2, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MenuBar() {
  const [time, setTime] = useState(new Date());
  const [batteryLevel, setBatteryLevel] = useState(100);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const menuItems = [
    { label: 'Dashboard', isActive: true },
    { label: 'File' },
    { label: 'Edit' },
    { label: 'View' },
    { label: 'Go' },
    { label: 'Window' },
    { label: 'Help' }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 h-7 bg-black/80 backdrop-blur-xl z-50 px-2 flex items-center justify-between text-white/90 text-sm border-b border-white/5">
      <div className="flex items-center space-x-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-2 py-0.5 rounded-sm hover:bg-white/10"
        >
          <Apple className="w-4 h-4" />
        </motion.button>

        {menuItems.map((item) => (
          <motion.button
            key={item.label}
            whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            className={`px-2 py-0.5 rounded-sm ${
              item.isActive ? 'font-semibold' : 'font-normal'
            }`}
          >
            {item.label}
          </motion.button>
        ))}
      </div>
      
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2 px-2 py-0.5 rounded-sm hover:bg-white/10">
          <Battery className="w-4 h-4" />
          <span className="text-xs">{batteryLevel}%</span>
        </div>
        <div className="px-2 py-0.5 rounded-sm hover:bg-white/10">
          <Wifi className="w-4 h-4" />
        </div>
        <div className="px-2 py-0.5 rounded-sm hover:bg-white/10">
          <Volume2 className="w-4 h-4" />
        </div>
        <div className="px-2 py-0.5 rounded-sm hover:bg-white/10">
          <Search className="w-4 h-4" />
        </div>
        <div className="px-2 py-0.5 rounded-sm hover:bg-white/10">
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
}