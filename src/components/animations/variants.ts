// Animation easing presets
export const easings = {
  smooth: [0.43, 0.13, 0.23, 0.96],
  bouncy: [0.68, -0.6, 0.32, 1.6],
  gentle: [0.4, 0.0, 0.2, 1]
};

// Shared animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: easings.smooth
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
      ease: easings.smooth
    }
  }
};

export const glowingText = {
  animate: {
    textShadow: [
      "0 0 20px rgba(79, 70, 229, 0.5)",
      "0 0 40px rgba(79, 70, 229, 0.8)",
      "0 0 20px rgba(79, 70, 229, 0.5)"
    ],
    transition: { 
      duration: 2, 
      repeat: Infinity,
      ease: easings.gentle
    }
  }
};