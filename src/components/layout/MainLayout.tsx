import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 to-black"
    >
      <Navbar />
      <div className="pt-20">
        {children}
      </div>
    </motion.div>
  );
}