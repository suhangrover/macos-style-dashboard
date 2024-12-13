import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Terminal, Cpu } from 'lucide-react';
import MinimalParticles from './ui/MinimalParticles';
import { transitions } from './animations/transitions';

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <motion.div 
      style={{ opacity }}
      className="relative min-h-screen bg-gray-900 overflow-hidden flex items-center justify-center"
      id="home"
    >
      <MinimalParticles />

      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-purple-900/50 to-blue-900/50" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <motion.div 
        className="text-center px-4 relative z-10"
        style={{ y }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={transitions.smooth}
          className="mb-8 flex justify-center space-x-8"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Code2 className="h-16 w-16 text-indigo-400" />
            <motion.div
              className="absolute inset-0 bg-indigo-500 rounded-full filter blur-2xl opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: -360 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Terminal className="h-16 w-16 text-purple-400" />
            <motion.div
              className="absolute inset-0 bg-purple-500 rounded-full filter blur-2xl opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Cpu className="h-16 w-16 text-blue-400" />
            <motion.div
              className="absolute inset-0 bg-blue-500 rounded-full filter blur-2xl opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...transitions.smooth, delay: 0.2 }}
          className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 mb-6 tracking-tight"
        >
          Byte Club
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...transitions.smooth, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 max-w-xl mx-auto mb-12"
        >
          Empowering the next generation of tech innovators
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...transitions.smooth, delay: 0.6 }}
          className="space-x-6"
        >
          <motion.a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-full hover:from-indigo-600 hover:via-purple-600 hover:to-blue-600 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
          <motion.a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white border-2 border-white/20 rounded-full hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full relative"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="w-1 h-1 bg-white rounded-full absolute left-1/2 top-2 -translate-x-1/2"
            animate={{ opacity: [1, 0], y: [0, 12] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}