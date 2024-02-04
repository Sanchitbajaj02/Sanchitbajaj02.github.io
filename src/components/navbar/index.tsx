"use client";
import { Home, User, FileText, Briefcase, Layout, Send, Sun, Moon } from "react-feather";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="flex items-center py-4">
      <a href="/" className="text-xl">
        Sanchit Bajaj
      </a>

      <div className="ml-auto">
        <ul className="flex items-center gap-4">
          <li className="">
            <a href="/" className="flex gap-1 items-center">
              <Home size={20} /> Home
            </a>
          </li>
          <li>
            <a href="/" className="flex gap-1 items-center">
              <User size={20} /> About
            </a>
          </li>
          <li>
            <a href="/" className="flex gap-1 items-center">
              <FileText size={20} /> Skills
            </a>
          </li>
          <li>
            <a href="/" className="flex gap-1 items-center">
              <Briefcase size={20} /> Services
            </a>
          </li>
          <li>
            <a href="/" className="flex gap-1 items-center">
              <Layout size={20} /> Porfolio
            </a>
          </li>
          <li>
            <a href="/" className="flex gap-1 items-center">
              <Send size={20} /> Contact
            </a>
          </li>
          <li onClick={toggleTheme} className="hover:cursor-pointer">
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </li>
        </ul>
      </div>
    </nav>
  );
}
