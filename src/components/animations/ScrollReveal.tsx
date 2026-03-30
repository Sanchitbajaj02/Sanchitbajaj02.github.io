"use client";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  blur?: boolean;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.6,
  className,
  direction = "up",
  blur = true,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-5% 0px" });
  const prefersReduced = useReducedMotion();

  const offset = 18;
  const initial = prefersReduced
    ? { opacity: 0 }
    : {
        opacity: 0,
        y: direction === "up" ? offset : direction === "down" ? -offset : 0,
        x: direction === "left" ? offset : direction === "right" ? -offset : 0,
        filter: blur ? "blur(4px)" : "blur(0px)",
      };

  const animate = isInView
    ? { opacity: 1, y: 0, x: 0, filter: "blur(0px)" }
    : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger container + item pair
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { ease: [0.22, 1, 0.36, 1] as [number,number,number,number], duration: 0.55 },
  },
};

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function StaggerContainer({ children, className, delay = 0 }: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.08, delayChildren: delay },
        },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      variants={
        prefersReduced
          ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
          : staggerItem
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
