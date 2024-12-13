import React from 'react';
import { motion } from 'framer-motion';
import Team from '../components/Team';
import { fadeInUp } from '../components/animations/variants';

export default function TeamPage() {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="initial"
      variants={fadeInUp}
    >
      <Team />
    </motion.main>
  );
}