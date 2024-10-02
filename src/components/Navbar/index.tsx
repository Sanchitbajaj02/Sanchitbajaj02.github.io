"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Home",
    slug: "/",
  },
  {
    label: "Resume",
    slug: "/resume",
  },
  {
    label: "Portfolio",
    slug: "/portfolio",
  },
  {
    label: "Blog",
    slug: "/blog",
  },
  {
    label: "Contact",
    slug: "/contact",
  },
];

type NavItem = (typeof navItems)[0];

export const Navbar = () => {
  const path = usePathname();

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems &&
          navItems.length > 0 &&
          navItems.map((item: NavItem) => {
            return (
              <>
                <li className="navbar-item" key={item.label}>
                  <Link
                    href={item.slug}
                    className={`navbar-link ${item.slug === path && "active"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              </>
            );
          })}
      </ul>
    </nav>
  );
};
