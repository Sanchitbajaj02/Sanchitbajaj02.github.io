"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export default function AmbientSound() {
  const [enabled, setEnabled] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  // Restore user preference
  useEffect(() => {
    try {
      const saved = localStorage.getItem("ambient-sound");
      if (saved === "true") setEnabled(true);
    } catch {
      // localStorage not available (SSR guard)
    }
  }, []);

  useEffect(() => {
    if (!enabled) {
      if (gainRef.current && ctxRef.current) {
        gainRef.current.gain.linearRampToValueAtTime(
          0,
          ctxRef.current.currentTime + 0.8
        );
      }
      localStorage.setItem("ambient-sound", "false");
      return;
    }

    localStorage.setItem("ambient-sound", "true");

    if (!initialized) {
      // Build a minimal server-room ambient hum using two slightly-detuned oscillators
      const ctx = new AudioContext();
      ctxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainRef.current = masterGain;

      // Low fundamental (server room hum)
      [60, 62, 120].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        osc.type = i < 2 ? "sine" : "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        oscGain.gain.setValueAtTime(i === 2 ? 0.015 : 0.025, ctx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();
      });

      setInitialized(true);
    }

    // Fade in
    if (gainRef.current && ctxRef.current) {
      gainRef.current.gain.linearRampToValueAtTime(
        0.06,
        ctxRef.current.currentTime + 1.2
      );
    }
  }, [enabled, initialized]);

  const toggle = () => setEnabled((prev) => !prev);

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      title={enabled ? "Disable ambient sound" : "Enable ambient sound (server-room hum)"}
      aria-label={enabled ? "Disable ambient sound" : "Enable ambient sound"}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        background: "hsl(240,2%,13%)",
        border: `1px solid ${enabled ? "hsl(45,100%,71%)" : "hsl(0,0%,22%)"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9990,
        color: enabled ? "hsl(45,100%,71%)" : "hsl(0,0%,55%)",
        transition: "color 0.3s, border-color 0.3s",
        backdropFilter: "blur(8px)",
      }}
    >
      {enabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
    </motion.button>
  );
}
