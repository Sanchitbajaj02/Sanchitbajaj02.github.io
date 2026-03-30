"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const TRAIL_LENGTH = 7;

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isText, setIsText] = useState(false);

  // Exact mouse position (dot)
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Ring chases mouse with spring
  const ringX = useSpring(mouseX, { stiffness: 350, damping: 38 });
  const ringY = useSpring(mouseY, { stiffness: 350, damping: 38 });

  // Phosphor trail — DOM-manipulated directly (no React re-renders)
  const trailRefs = useRef<(HTMLDivElement | null)[]>(Array(TRAIL_LENGTH).fill(null));
  const positions = useRef<{ x: number; y: number }[]>(
    Array(TRAIL_LENGTH).fill({ x: -200, y: -200 })
  );
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    // Don't render on touch-only devices
    if (window.matchMedia("(hover: none)").matches) return;

    const updateTrail = () => {
      // Each trail position inherits from the one ahead of it
      for (let i = TRAIL_LENGTH - 1; i > 0; i--) {
        positions.current[i] = { ...positions.current[i - 1] };
      }
      trailRefs.current.forEach((el, i) => {
        if (!el) return;
        const { x, y } = positions.current[i];
        el.style.transform = `translate(${x - 16}px, ${y - 16}px)`;
        el.style.opacity = String(((TRAIL_LENGTH - i) / TRAIL_LENGTH) * 0.13);
      });
      rafRef.current = requestAnimationFrame(updateTrail);
    };

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      positions.current[0] = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element;
      const interactive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        !!target.closest("a") ||
        !!target.closest("button") ||
        target.getAttribute("role") === "button" ||
        !!(target as HTMLElement).onclick;
      const textEl =
        target.tagName === "P" ||
        target.tagName === "SPAN" ||
        target.tagName === "LI" ||
        target.tagName === "H1" ||
        target.tagName === "H2" ||
        target.tagName === "H3" ||
        target.tagName === "H4";
      setIsPointer(interactive);
      setIsText(!interactive && textEl);
    };

    document.addEventListener("mouseenter", () => setVisible(true));
    document.addEventListener("mouseleave", () => setVisible(false));
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });

    rafRef.current = requestAnimationFrame(updateTrail);

    return () => {
      document.removeEventListener("mouseenter", () => setVisible(true));
      document.removeEventListener("mouseleave", () => setVisible(false));
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [mouseX, mouseY, visible]);

  return (
    <>
      {/* Phosphor trail rings */}
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
        <div
          key={i}
          ref={(el) => { trailRefs.current[i] = el; }}
          aria-hidden
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: 32,
            height: 32,
            borderRadius: "50%",
            border: "1px solid hsl(45,100%,71%)",
            opacity: 0,
            pointerEvents: "none",
            zIndex: 9997,
            willChange: "transform, opacity",
          }}
        />
      ))}

      {/* Ring — springs after cursor */}
      <motion.div
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.25s",
        }}
      >
        <motion.div
          animate={{
            width: isPointer ? 44 : isText ? 3 : 32,
            height: isPointer ? 44 : isText ? 28 : 32,
            borderRadius: isText ? "2px" : "50%",
            borderColor: isPointer
              ? "hsl(45,100%,90%)"
              : "hsl(45,100%,71%)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          style={{
            border: "1.5px solid hsl(45,100%,71%)",
            mixBlendMode: isPointer ? "difference" : "normal",
            opacity: 0.75,
          }}
        />
      </motion.div>

      {/* Dot — exact position */}
      <motion.div
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          width: isPointer ? 6 : 7,
          height: isPointer ? 6 : 7,
          borderRadius: "50%",
          background: "hsl(45,100%,71%)",
          pointerEvents: "none",
          zIndex: 10000,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.25s, width 0.2s, height 0.2s",
          willChange: "transform",
        }}
      />
    </>
  );
}
