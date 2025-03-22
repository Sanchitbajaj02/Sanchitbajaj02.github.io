"use client";
import React, { useState } from "react";
import { PortfolioCard } from "@/components/PortfolioCard";
import { tabList } from "@/static/tabList";
import { ChevronDown } from "lucide-react";
import { projectList } from "@/static/projectList";




export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<string>("all");

  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {tabList.map((tabItem, idx) => {
            return (
              <li className="filter-item" key={idx}>
                <button
                  className={tabItem.id === activeTab ? "active" : ""}
                  onClick={() => setActiveTab(tabItem.id)}
                >
                  {tabItem.name}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value" data-selecct-value>
              Select category
            </div>

            <div className="select-icon">
              <ChevronDown />
            </div>
          </button>

          <ul className="select-list">
            {tabList.map((tabItem, idx) => {
              return (
                <li className="select-item" key={idx}>
                  <button
                    className={tabItem.id === activeTab ? "active" : ""}
                    onClick={() => setActiveTab(tabItem.id)}
                    data-select-item
                  >
                    {tabItem.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="project-list">
          {projectList
            .filter((projectItem) => {
              if (activeTab === "all") {
                return true;
              }

              return projectItem.tabId.toLowerCase() === activeTab;
            })
            .map((projectItem, idx) => {
              return <PortfolioCard key={idx} projectItem={projectItem} />;
            })}
        </ul>
      </section>
    </article>
  );
}
