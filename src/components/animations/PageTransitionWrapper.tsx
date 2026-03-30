"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

// Scroll progress bar driven by framer-motion scroll
import { useScroll, useSpring } from "framer-motion";

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  return (
    <motion.div
      id="scroll-progress"
      style={{ scaleX, width: "100%" }}
    />
  );
}

export default function PageTransitionWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const prefersReduced = useReducedMotion();

  const variants = {
    initial: prefersReduced
      ? { opacity: 0 }
      : { opacity: 0, scale: 0.985, y: 10 },
    animate: prefersReduced
      ? { opacity: 1 }
      : { opacity: 1, scale: 1, y: 0 },
    exit: prefersReduced
      ? { opacity: 0 }
      : { opacity: 0, scale: 0.985, y: -10 },
  };

  return (
    <>
      <ScrollProgressBar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ width: "100%", minHeight: "100%" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
