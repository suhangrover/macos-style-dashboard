import React from 'react';
import { motion } from 'framer-motion';

export default function Credits() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-2 right-3 text-white/50 text-xs font-light z-50"
    >
      Credits: Suhan Grover
    </motion.div>
  );
}