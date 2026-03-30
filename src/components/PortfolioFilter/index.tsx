"use client";
import React, { useState } from "react";
import { PortfolioCard } from "@/components/PortfolioCard";
import { tabList } from "@/static/tabList";
import { projectList } from "@/static/projectList";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioFilter() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filtered = projectList.filter((p) =>
    activeTab === "all" ? true : p.tabId.toLowerCase() === activeTab
  );

  return (
    <section className="projects">
      {/* Filter tabs with sliding pill */}
      <ul className="filter-list">
        {tabList.map((tabItem, idx) => {
          const isActive = tabItem.id === activeTab;
          return (
            <li className="filter-item" key={idx} style={{ position: "relative" }}>
              {isActive && (
                <motion.span
                  layoutId="filter-pill"
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "8px",
                    background: "hsla(45,100%,71%,0.14)",
                    border: "1px solid hsla(45,100%,71%,0.32)",
                    zIndex: 0,
                  }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <button
                className={isActive ? "active" : ""}
                onClick={() => setActiveTab(tabItem.id)}
                style={{ position: "relative", zIndex: 1 }}
              >
                {tabItem.name}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="filter-select-box">
        <button className="filter-select" data-select>
          <div className="select-value" data-select-value>
            Select category
          </div>
          <div className="select-icon">
            <ChevronDown />
          </div>
        </button>

        <ul className="select-list">
          {tabList.map((tabItem, idx) => (
            <li className="select-item" key={idx}>
              <button
                className={tabItem.id === activeTab ? "active" : ""}
                onClick={() => setActiveTab(tabItem.id)}
                data-select-item
              >
                {tabItem.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Project grid with AnimatePresence for smooth filter transitions */}
      <motion.ul className="project-list" layout>
        <AnimatePresence mode="popLayout">
          {filtered.map((projectItem, idx) => (
            <motion.div
              key={projectItem.title}
              layout
              initial={{ opacity: 0, scale: 0.92, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.88, filter: "blur(4px)" }}
              transition={{
                duration: 0.3,
                delay: idx * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <PortfolioCard projectItem={projectItem} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.ul>
    </section>
  );
}
