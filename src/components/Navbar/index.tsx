"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "@/types";
import { navItems } from "@/static/navItems";

export const Navbar = () => {
  const path = usePathname();

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems &&
          navItems.length > 0 &&
          navItems.map((item: NavItem) => {
            return (
              <li className="navbar-item" key={item.label}>
                <Link
                  href={item.slug}
                  className={`navbar-link ${item.slug === path && "active"}`}
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
