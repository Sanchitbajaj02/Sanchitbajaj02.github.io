"use client";
import { useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  strength?: number;
  /** Whether to apply the ripple effect on click */
  ripple?: boolean;
}

export default function MagneticButton({
  children,
  className,
  style,
  strength = 0.32,
  ripple = true,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 22 });
  const springY = useSpring(y, { stiffness: 300, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!ripple || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const rippleEl = document.createElement("div");
    const size = Math.max(rect.width, rect.height) * 2;
    const cx = e.clientX - rect.left - size / 2;
    const cy = e.clientY - rect.top - size / 2;
    Object.assign(rippleEl.style, {
      position: "absolute",
      width: `${size}px`,
      height: `${size}px`,
      left: `${cx}px`,
      top: `${cy}px`,
      borderRadius: "50%",
      background: "hsl(45,100%,71%)",
      opacity: "0.25",
      transform: "scale(0)",
      pointerEvents: "none",
      animation: "rippleExpand 0.5s ease-out forwards",
    });
    ref.current.style.overflow = "hidden";
    ref.current.style.position = "relative";
    ref.current.appendChild(rippleEl);
    setTimeout(() => rippleEl.remove(), 500);
  };

  return (
    <>
      <style>{`@keyframes rippleExpand { to { transform: scale(1); opacity: 0; } }`}</style>
      <motion.div
        ref={ref}
        style={{ x: springX, y: springY, display: "inline-block", ...style }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className={className}
      >
        {children}
      </motion.div>
    </>
  );
}
