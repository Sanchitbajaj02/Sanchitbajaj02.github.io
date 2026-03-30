"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "@/types";
import { navItems } from "@/static/navItems";
import { motion } from "framer-motion";

export const Navbar = () => {
  const path = usePathname();

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems &&
          navItems.length > 0 &&
          navItems.map((item: NavItem) => {
            const isActive = item.slug === path;
            return (
              <li
                className="navbar-item"
                key={item.label}
                style={{ position: "relative" }}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "8px",
                      background: "hsla(45,100%,71%,0.14)",
                      border: "1px solid hsla(45,100%,71%,0.32)",
                      zIndex: 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 32,
                    }}
                  />
                )}
                <Link
                  href={item.slug}
                  className={`navbar-link ${isActive ? "active" : ""}`}
                  style={{ position: "relative", zIndex: 1 }}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};
