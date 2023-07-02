"use client";
import React, { useState } from "react";
import {
  Home,
  User,
  FileText,
  Briefcase,
  Layout,
  Send,
  Sun,
  Moon,
} from "react-feather";

export default function Navbar() {
  const [themeState, setThemeState] = useState("light");

  return (
    <header className="max-w-screen-lg mx-auto">
      <nav>
        <a href="/">Sanchit Bajaj</a>

        <div>
          <ul>
            <li>
              <a href="/">
                <Home size={20} /> Home
              </a>
            </li>
            <li>
              <a href="/">
                <User size={20} /> About
              </a>
            </li>
            <li>
              <a href="/">
                <FileText size={20} /> Skills
              </a>
            </li>
            <li>
              <a href="/">
                <Briefcase size={20} /> Services
              </a>
            </li>
            <li>
              <a href="/">
                <Layout size={20} /> Porfolio
              </a>
            </li>
            <li>
              <a href="/">
                <Send size={20} /> Contact
              </a>
            </li>
            <li>
              {themeState === "light" ? <Sun size={20}/> : <Moon size={20} />}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
