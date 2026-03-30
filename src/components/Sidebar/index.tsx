"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Mail,
  CalendarDays,
  MapPin,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

export default function Sidebar() {
  const [toggleData, setToggleData] = useState<boolean>(false);

  // ── 3D card tilt ──────────────────────────────────────────────
  const cardRef = useRef<HTMLElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { stiffness: 260, damping: 28 };
  const springX = useSpring(rawX, springConfig);
  const springY = useSpring(rawY, springConfig);

  const rotateY = useTransform(springX, [-120, 120], [-8, 8]);
  const rotateX = useTransform(springY, [-160, 160], [6, -6]);

  // Specular highlight follows inverse of tilt
  const specX = useTransform(springX, [-120, 120], [70, 30]);
  const specY = useTransform(springY, [-160, 160], [30, 70]);
  const specBg = useTransform(
    [specX, specY],
    (values: number[]) =>
      `radial-gradient(ellipse 60% 40% at ${values[0]}% ${values[1]}%, hsla(45,100%,80%,0.12), transparent)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    rawX.set(e.clientX - rect.left - rect.width / 2);
    rawY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.aside
      ref={cardRef}
      className={`sidebar ${toggleData ? "active" : ""}`}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
        perspective: 900,
        position: "relative",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient breathing light overlay */}
      <div className="sidebar-breathing-light" aria-hidden />

      {/* Specular highlight that tracks tilt */}
      <motion.div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          backgroundImage: specBg as unknown as string,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div className="sidebar-info" style={{ position: "relative", zIndex: 2 }}>
        <figure className="avatar-box">
          <Image
            src="/assets/images/profile-pic.png"
            alt="Sanchit Bajaj"
            width={250}
            height={250}
            priority
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Sanchit Bajaj">
            Sanchit Bajaj
          </h1>

          <p className="title">Full Stack Developer</p>

          {/* Open to Work badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 280, damping: 20 }}
            className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full mt-2"
            style={{
              background: "hsl(140, 60%, 20%)",
              color: "hsl(140, 80%, 65%)",
              border: "1px solid hsl(140, 60%, 30%)",
              animation: "openToPulse 2.5s ease-out infinite",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "hsl(140, 80%, 55%)",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            Open to Work
          </motion.span>
        </div>

        {/* Persistent Book a Call CTA */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: "100%", marginTop: "10px" }}
        >
          <Link
            href="https://topmate.io/sanchitbajaj02"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              padding: "8px 16px",
              borderRadius: "8px",
              fontSize: "13px",
              fontWeight: 600,
              background: "linear-gradient(to right, hsl(45,100%,71%), hsl(35,100%,68%))",
              color: "hsl(240,2%,12%)",
              textDecoration: "none",
              width: "100%",
              transition: "filter 0.2s",
            }}
            title="Book a call with Sanchit Bajaj"
            onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(1)")}
          >
            <CalendarDays size={14} />
            Book a Call
          </Link>
        </motion.div>

        <button
          className="info_more-btn active"
          onClick={() => setToggleData((p) => !p)}
        >
          <span>{toggleData ? "Hide Contacts" : "Show Contacts"}</span>
          <motion.span
            animate={{ rotate: toggleData ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
            style={{ display: "flex" }}
          >
            <ChevronDown size={16} />
          </motion.span>
        </button>
      </div>

      <div className="sidebar-info_more" style={{ position: "relative", zIndex: 2 }}>
        <div className="separator" />

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <Mail />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email Address</p>
              <a
                href="mailto:sanchitbajaj02@gmail.com"
                className="contact-link"
                title="sanchitbajaj02@gmail.com"
              >
                sanchitbajaj02@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <MapPin />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Delhi, India</address>
            </div>
          </li>
        </ul>

        <div className="separator" />

        <ul className="social-list">
          {[
            {
              href: "https://www.linkedin.com/in/sanchitbajaj02",
              icon: <Linkedin />,
              title: "LinkedIn — @sanchitbajaj02",
            },
            {
              href: "https://github.com/sanchitbajaj02",
              icon: <Github />,
              title: "GitHub — @sanchitbajaj02",
            },
            {
              href: "https://x.com/solitrix02",
              icon: <Twitter />,
              title: "Twitter/X — @solitrix02",
            },
          ].map(({ href, icon, title }) => (
            <li className="social-item" key={href}>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title={title}
              >
                <motion.span
                  whileHover={{ scale: 1.18, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  style={{ display: "flex" }}
                >
                  {icon}
                </motion.span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.aside>
  );
}
