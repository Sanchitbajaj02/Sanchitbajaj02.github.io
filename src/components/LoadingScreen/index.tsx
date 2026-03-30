"use client";
import React, { useEffect, useState, useCallback, ReactNode } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

// ── SVG arc path helper (0° = 12 o'clock, clockwise) ─────────
const arcPath = (startDeg: number, endDeg: number): string => {
  const toRad = (d: number) => (d - 90) * (Math.PI / 180);
  const cx = 80, cy = 80, r = 70;
  const s = toRad(startDeg), e = toRad(endDeg);
  const x1 = (cx + r * Math.cos(s)).toFixed(2);
  const y1 = (cy + r * Math.sin(s)).toFixed(2);
  const x2 = (cx + r * Math.cos(e)).toFixed(2);
  const y2 = (cy + r * Math.sin(e)).toFixed(2);
  return `M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`;
};

const HUD_ARCS = [
  arcPath(2, 88),
  arcPath(92, 178),
  arcPath(182, 268),
  arcPath(272, 358),
];

// ── Typing hook ───────────────────────────────────────────────
function useTyping(text: string, active: boolean, speed = 15) {
  const [chars, setChars] = useState("");
  useEffect(() => {
    if (!active) { setChars(""); return; }
    setChars("");
    let i = 0;
    const id = setInterval(() => {
      setChars(text.slice(0, ++i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [active, text, speed]);
  return chars;
}

// ── Glitch text ───────────────────────────────────────────────
function GlitchText({ text }: { text: string }) {
  const [g, setG] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setG(true),  40);
    const t2 = setTimeout(() => setG(false), 160);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);
  return (
    <span style={{
      color:      g ? "hsl(195,100%,65%)" : "hsl(45,100%,71%)",
      filter:     g ? "brightness(1.7)"   : "none",
      transition: "color 0.08s, filter 0.08s",
    }}>
      {text}
    </span>
  );
}

// ── Blinking cursor ───────────────────────────────────────────
function Cursor() {
  return (
    <motion.span
      animate={{ opacity: [1, 1, 0, 0] }}
      transition={{ repeat: Infinity, duration: 1, times: [0, 0.45, 0.5, 1], ease: "linear" }}
    >
      _
    </motion.span>
  );
}

// ── Constants ─────────────────────────────────────────────────
const BOOT_TEXT  = "SANCHIT_OS v2.1.0 .............. BOOT OK";
const META_LINES = ["NODE: IN-2024-SB02", "CLEARANCE: CLASSIFIED"];
const VERIFY     = [
  { label: "IDENTITY",   value: "VERIFIED"       },
  { label: "CLEARANCE",  value: "GRANTED"         },
  { label: "DECRYPTING", value: "ACCESS PROTOCOL" },
];

type Phase = 0 | 1 | 2 | 3 | 4 | 5;

// ── Inner loader ──────────────────────────────────────────────
function LoaderInner({ onDone }: { onDone: () => void }) {
  const prefersReduced                    = useReducedMotion();
  const [phase, setPhase]                 = useState<Phase>(0);
  const [verified, setVerified]           = useState([false, false, false]);
  const [showSkip, setShowSkip]           = useState(false);
  const [irisClose, setIrisClose]         = useState(false);
  const [ringRotated, setRingRotated]     = useState(false);

  const bootText = useTyping(BOOT_TEXT, phase >= 1);

  // Reduced-motion fast path
  useEffect(() => {
    if (!prefersReduced) return;
    const t = setTimeout(() => { setIrisClose(true); setTimeout(onDone, 500); }, 400);
    return () => clearTimeout(t);
  }, [prefersReduced, onDone]);

  // Phase clock
  useEffect(() => {
    if (prefersReduced) return;
    const T = (ms: number, fn: () => void) => setTimeout(fn, ms);
    const ts = [
      T(180,  () => setPhase(1)),
      T(480,  () => setPhase(2)),
      T(1100, () => setPhase(3)),
      T(1150, () => setRingRotated(true)),
      T(1260, () => setVerified([true,  false, false])),
      T(1460, () => setVerified([true,  true,  false])),
      T(1660, () => setVerified([true,  true,  true ])),
      T(1800, () => setPhase(4)),
      T(2200, () => setPhase(5)),
      // FIX: set irisClose BEFORE onDone so transition has already started
      T(2250, () => setIrisClose(true)),
      T(2900, () => onDone()),
      T(800,  () => setShowSkip(true)),
    ];
    return () => ts.forEach(clearTimeout);
  }, [prefersReduced, onDone]);

  const skip = useCallback(() => {
    setIrisClose(true);
    setTimeout(onDone, 620);
  }, [onDone]);

  // Reduced-motion fallback
  if (prefersReduced) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: irisClose ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        style={{ position: "fixed", inset: 0, backgroundColor: "hsl(240,2%,6%)", zIndex: 9999 }}
      />
    );
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        overflow: "hidden",
        // FIX: use backgroundColor separately so backgroundImage isn't overridden
        backgroundColor: "hsl(240,2%,6%)",
        backgroundImage: [
          "repeating-linear-gradient(0deg,transparent,transparent 39px,hsla(45,100%,71%,0.04) 39px,hsla(45,100%,71%,0.04) 40px)",
          "repeating-linear-gradient(90deg,transparent,transparent 39px,hsla(45,100%,71%,0.04) 39px,hsla(45,100%,71%,0.04) 40px)",
        ].join(","),
        // FIX: always keep transition set — never "none". Changing transition and
        // clipPath in the same render means the browser sees them simultaneously
        // and skips the animation. Keeping transition always-on fixes this.
        clipPath: irisClose
          ? "circle(0% at 50% 50%)"
          : "circle(150% at 50% 50%)",
        transition: "clip-path 0.6s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      {/* ── Scan line ────────────────────────────────────────── */}
      <AnimatePresence>
        {phase === 1 && (
          <motion.div
            key="scan"
            initial={{ top: "0%" }}
            animate={{ top: "100%" }}
            transition={{ duration: 0.28, ease: "linear" }}
            style={{
              position: "absolute",
              left: 0, right: 0,
              height: "1px",
              background: "hsl(45,100%,71%)",
              boxShadow: "0 0 8px hsl(45,100%,71%), 0 0 28px hsla(45,100%,71%,0.5)",
              zIndex: 2,
            }}
          />
        )}
      </AnimatePresence>

      {/* ── Boot text — top left ─────────────────────────────── */}
      <motion.div
        animate={{ opacity: phase >= 1 && phase < 4 ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        style={{
          position: "absolute",
          top: 24, left: 24,
          fontFamily: '"JetBrains Mono","Fira Code","Courier New",monospace',
          fontSize: "11px",
          color: "hsl(0,0%,60%)",
          letterSpacing: "0.05em",
          whiteSpace: "pre",
          lineHeight: 1.6,
        }}
      >
        {bootText}
        {phase === 1 && <Cursor />}
      </motion.div>

      {/* ── Metadata — top right ─────────────────────────────── */}
      <motion.div
        animate={{ opacity: phase >= 2 && phase < 4 ? 0.45 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: "absolute",
          top: 24, right: 24,
          fontFamily: '"JetBrains Mono","Fira Code","Courier New",monospace',
          fontSize: "10px",
          color: "hsl(45,100%,71%)",
          letterSpacing: "0.08em",
          textAlign: "right",
          lineHeight: 1.9,
        }}
      >
        {META_LINES.map((l, i) => <div key={i}>{l}</div>)}
      </motion.div>

      {/* ── Centre glow ──────────────────────────────────────── */}
      <motion.div
        animate={{ opacity: phase >= 2 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "absolute",
          left: "50%", top: "50%",
          transform: "translate(-50%,-50%)",
          width: 320, height: 320,
          borderRadius: "50%",
          background: "radial-gradient(circle,hsla(45,100%,55%,0.08) 0%,transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* ── HUD Ring ─────────────────────────────────────────── */}
      <div style={{
        position: "absolute",
        left: "50%", top: "50%",
        transform: "translate(-50%,-50%)",
        width: 160, height: 160,
      }}>
        {/* Iris-expand ring on phase 4 */}
        <AnimatePresence>
          {phase >= 4 && (
            <motion.div
              key="iris-ring"
              initial={{ scale: 1, opacity: 0.9 }}
              animate={{ scale: 2.4, opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              style={{
                position: "absolute", inset: 0,
                borderRadius: "50%",
                border: "1.5px solid hsl(45,100%,71%)",
              }}
            />
          )}
        </AnimatePresence>

        {/* SVG ring
            FIX: use animate with ringRotated flag — never snap back to rotate:0
            after the rotation completes                                          */}
        <motion.svg
          width="160" height="160" viewBox="0 0 160 160"
          animate={{ rotate: ringRotated ? 360 : 0 }}
          transition={{ duration: 0.65, ease: "easeInOut" }}
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          {/* Ghost track */}
          <circle cx="80" cy="80" r="70" fill="none"
            stroke="hsla(45,100%,71%,0.1)" strokeWidth="1.5" />

          {/* 4 arc segments */}
          {HUD_ARCS.map((d, i) => (
            <motion.path
              key={i} d={d} fill="none"
              stroke="hsl(45,100%,71%)" strokeWidth="2.2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={phase >= 2 ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{
                pathLength: { duration: 0.38, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
                opacity:    { duration: 0.15, delay: i * 0.07 },
              }}
            />
          ))}

          {/* Crosshair */}
          {([
            [80,63, 80,73], [80,87, 80,97],
            [63,80, 73,80], [87,80, 97,80],
          ] as const).map(([x1,y1,x2,y2], i) => (
            <motion.line
              key={i} x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="hsl(45,100%,71%)" strokeWidth="1.5" strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 2 ? 0.75 : 0 }}
              transition={{ delay: 0.36 + i * 0.04 }}
            />
          ))}

          {/* Centre dot — FIX: use transformBox + transformOrigin so scale
              animates from the dot's own centre, not SVG origin (0,0)          */}
          <motion.circle
            cx="80" cy="80" r="3"
            fill="hsl(45,100%,71%)"
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
            initial={{ scale: 0, opacity: 0 }}
            animate={phase >= 2 && phase < 4
              ? { scale: [0.7, 1.4, 0.7], opacity: [0.4, 1, 0.4] }
              : phase >= 4
              ? { scale: 0, opacity: 0 }
              : { scale: 0, opacity: 0 }}
            transition={phase >= 2 && phase < 4
              ? { repeat: Infinity, duration: 0.7, ease: "easeInOut" }
              : { duration: 0.2 }}
          />
        </motion.svg>

        {/* Diagonal scan sweep during phase 3 */}
        <AnimatePresence>
          {phase === 3 && (
            <motion.div
              key="inner-scan"
              initial={{ x: "-120%", y: "120%", opacity: 0.8 }}
              animate={{ x: "120%", y: "-120%", opacity: 0.8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{
                position: "absolute",
                left: 0, top: "50%",
                width: "200%", height: "1px",
                rotate: "-45deg",
                background: "linear-gradient(90deg,transparent,hsl(45,100%,71%),transparent)",
                pointerEvents: "none",
              }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* ── Verification lines — below ring ──────────────────── */}
      <motion.div
        animate={{ opacity: phase >= 2 && phase < 4 ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute",
          left: "50%", top: "calc(50% + 106px)",
          transform: "translateX(-50%)",
          fontFamily: '"JetBrains Mono","Fira Code","Courier New",monospace',
          fontSize: "11px",
          letterSpacing: "0.08em",
          lineHeight: 2.1,
          textAlign: "left",
          width: 290,
        }}
      >
        {phase === 2 && (
          <div style={{ color: "hsl(0,0%,65%)" }}>
            INITIATING IDENTITY VERIFICATION...<Cursor />
          </div>
        )}
        {phase >= 3 && VERIFY.map(({ label, value }, i) => (
          <div key={i} style={{ display: "flex", gap: 6, color: "hsl(0,0%,55%)" }}>
            <span>►</span>
            <span style={{ flex: 1, minWidth: 100 }}>{label}</span>
            <span style={{ opacity: 0.5 }}>.....{" "}</span>
            {verified[i]
              ? <GlitchText text={value} />
              : (
                <motion.span
                  animate={{ opacity: [0.3, 0.65, 0.3] }}
                  transition={{ repeat: Infinity, duration: 0.4 }}
                >
                  PROCESSING
                </motion.span>
              )}
          </div>
        ))}
      </motion.div>

      {/* ── ACCESS GRANTED
          FIX: removed letterSpacing from style prop — controlled by animate only.
          Using y-slide + opacity for a reliable enter animation.                 */}
      <AnimatePresence>
        {phase >= 4 && (
          <motion.p
            key="access"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: "50%", top: "50%",
              transform: "translate(-50%,-50%)",
              margin: 0,
              fontFamily: '"JetBrains Mono","Fira Code","Courier New",monospace',
              fontSize: "clamp(13px, 1.8vw, 18px)",
              fontWeight: 200,
              color: "hsl(45,100%,71%)",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              letterSpacing: "0.36em",
              textShadow: "0 0 28px hsla(45,100%,71%,0.55)",
            }}
          >
            ACCESS GRANTED
          </motion.p>
        )}
      </AnimatePresence>

      {/* ── Gold iris-edge ring ───────────────────────────────── */}
      <AnimatePresence>
        {irisClose && (
          <motion.div
            key="edge-ring"
            initial={{ opacity: 0.85 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              position: "absolute",
              left: "50%", top: "50%",
              transform: "translate(-50%,-50%)",
              width: "clamp(180px,38vmin,260px)",
              height: "clamp(180px,38vmin,260px)",
              borderRadius: "50%",
              border: "1px solid hsl(45,100%,71%)",
              boxShadow: "0 0 18px hsla(45,100%,71%,0.4)",
              pointerEvents: "none",
            }}
          />
        )}
      </AnimatePresence>

      {/* ── Skip ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {showSkip && phase < 5 && (
          <motion.button
            key="skip"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={skip}
            style={{
              position: "absolute",
              bottom: 22, right: 22,
              background: "transparent",
              border: "none",
              fontFamily: '"JetBrains Mono","Fira Code","Courier New",monospace',
              fontSize: "11px",
              color: "hsl(0,0%,38%)",
              letterSpacing: "0.14em",
              cursor: "pointer",
              padding: "8px 12px",
            }}
          >
            [ SKIP ]
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Public wrapper ─────────────────────────────────────────────
export default function LoadingScreen({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<"checking" | "show" | "done">("checking");

  useEffect(() => {
    const seen = sessionStorage.getItem("sb_loader_seen");
    setStatus(seen ? "done" : "show");
  }, []);

  const handleDone = useCallback(() => {
    sessionStorage.setItem("sb_loader_seen", "true");
    setStatus("done");
  }, []);

  return (
    <>
      {status === "show" && <LoaderInner onDone={handleDone} />}
      <div
        style={{
          opacity:    status === "done" ? 1 : status === "show" ? 0.05 : 0,
          transition: status === "done" ? "opacity 0.4s ease 0.05s" : "none",
          visibility: status === "checking" ? "hidden" : "visible",
        }}
      >
        {children}
      </div>
    </>
  );
}
