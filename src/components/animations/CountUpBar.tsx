"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { SkillItem } from "@/types";

interface CountUpBarProps {
  skill: SkillItem;
  index?: number;
}

export default function CountUpBar({ skill, index = 0 }: CountUpBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const prefersReduced = useReducedMotion();
  const [count, setCount] = useState(0);
  const [shimmer, setShimmer] = useState(false);

  const target = parseInt(skill.percentage);
  const delay = index * 0.1;

  // Count-up animation via rAF
  useEffect(() => {
    if (!isInView) return;
    const duration = prefersReduced ? 0 : 1300;
    const startTime = performance.now();

    if (duration === 0) {
      setCount(target);
      return;
    }

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
        // Brief "lock" scale pulse on completion
        setShimmer(true);
        setTimeout(() => setShimmer(false), 300);
      }
    };

    const timerId = setTimeout(
      () => requestAnimationFrame(animate),
      delay * 1000
    );
    return () => clearTimeout(timerId);
  }, [isInView, target, delay, prefersReduced]);

  return (
    <div ref={ref} style={{ width: "100%", padding: "4px 0" }}>
      {/* Label + counter */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "8px",
        }}
      >
        <span className="h5" style={{ fontSize: "14px" }}>
          {skill.skillName}
        </span>
        <motion.span
          animate={{ scale: shimmer ? 1.08 : 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          style={{
            fontSize: "12px",
            fontWeight: 700,
            color: "hsl(45,100%,72%)",
            minWidth: "36px",
            textAlign: "right",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {count}%
        </motion.span>
      </div>

      {/* Track */}
      <div
        style={{
          width: "100%",
          height: "4px",
          borderRadius: "999px",
          background: "hsl(0,0%,20%)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Fill */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isInView ? skill.percentage : 0 }}
          transition={{
            duration: prefersReduced ? 0 : 1.3,
            delay: prefersReduced ? 0 : delay,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            height: "100%",
            borderRadius: "999px",
            background:
              "linear-gradient(to right, hsl(45,100%,72%), hsl(35,100%,68%))",
            position: "relative",
          }}
        >
          {/* Shimmer sweep */}
          {shimmer && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                borderRadius: "999px",
              }}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
}
