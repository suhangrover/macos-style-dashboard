import React from 'react';
import { motion } from 'framer-motion';
import Resources from '../components/Resources';
import { fadeInUp } from '../components/animations/variants';

export default function ResourcesPage() {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="initial"
      variants={fadeInUp}
    >
      <Resources />
    </motion.main>
  );
}