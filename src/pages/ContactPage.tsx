import React from 'react';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import { fadeInUp } from '../components/animations/variants';

export default function ContactPage() {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="initial"
      variants={fadeInUp}
    >
      <Contact />
    </motion.main>
  );
}