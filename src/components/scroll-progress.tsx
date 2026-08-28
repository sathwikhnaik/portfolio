"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 110, damping: 28, mass: 0.35 });
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return null;
  return <motion.div className="scroll-progress" style={{ scaleX: smoothProgress }} aria-hidden="true" />;
}
