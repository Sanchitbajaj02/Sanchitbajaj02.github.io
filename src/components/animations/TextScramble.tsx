"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "p";

interface TextScrambleProps {
  text: string;
  className?: string;
  as?: HeadingTag;
  /** Delay before scramble starts (ms) */
  delay?: number;
  /** Scramble duration in animation frames */
  frames?: number;
  /** Fire on mount instead of scroll-into-view */
  immediate?: boolean;
}

// Technical character set — reinforces developer identity
const CHARS = "{}[]<>/\\|#@01!?_=+-*;:";

export default function TextScramble({
  text,
  className,
  as: Tag = "span",
  delay = 0,
  frames = 28,
  immediate = false,
}: TextScrambleProps) {
  const [output, setOutput] = useState(text);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    margin: "-8% 0px",
  });
  const prefersReduced = useReducedMotion();
  const hasAnimated = useRef(false);

  const trigger = immediate ? true : isInView;

  useEffect(() => {
    if (!trigger || hasAnimated.current || prefersReduced) return;
    hasAnimated.current = true;

    const timer = setTimeout(() => {
      let frame = 0;

      const step = () => {
        const progress = frame / frames;
        const resolved = Math.floor(progress * text.length);

        const scrambled = text
          .split("")
          .map((char, i) => {
            if (char === " ") return "\u00A0";
            if (i < resolved) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");

        setOutput(scrambled);
        frame++;

        if (frame <= frames) {
          requestAnimationFrame(step);
        } else {
          setOutput(text);
        }
      };

      requestAnimationFrame(step);
    }, delay);

    return () => clearTimeout(timer);
  }, [trigger, text, delay, frames, prefersReduced]);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLHeadingElement & HTMLParagraphElement & HTMLSpanElement>}
      className={className}
      aria-label={text}
    >
      {output}
    </Tag>
  );
}
