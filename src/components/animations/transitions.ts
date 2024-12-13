// Reusable transition configurations
export const transitions = {
  spring: {
    type: "spring",
    stiffness: 100,
    damping: 20,
    mass: 0.5
  },
  
  smooth: {
    type: "tween",
    duration: 0.6,
    ease: [0.43, 0.13, 0.23, 0.96]
  },
  
  hover: {
    type: "tween",
    duration: 0.3,
    ease: [0.43, 0.13, 0.23, 0.96]
  }
};