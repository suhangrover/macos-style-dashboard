import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { staggerContainer, fadeInUp } from './animations/variants';

const achievements = [
  {
    stat: '200+',
    label: 'Active Members',
    description: 'Passionate students exploring technology'
  },
  {
    stat: '50+',
    label: 'Projects Completed',
    description: 'From web apps to AI solutions'
  },
  {
    stat: '24',
    label: 'Tech Workshops',
    description: 'Hands-on learning experiences'
  },
  {
    stat: '12',
    label: 'Hackathons Won',
    description: 'Recognizing our innovation'
  }
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <div className="py-16 bg-white" id="about" ref={ref}>
      <motion.div 
        style={{ scale }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {achievements.map((item) => (
            <motion.div
              key={item.stat}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-300" />
              <div className="relative bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-bold text-indigo-600 mb-2">{item.stat}</div>
                <div className="text-xl font-semibold text-gray-800 mb-2">{item.label}</div>
                <div className="text-gray-600">{item.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}