"use client";
import { ChevronDown, Eye } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project, Tab } from "@/types";

const tabList: Tab[] = [
  {
    id: "all",
    name: "All",
  },
  {
    id: "web-design",
    name: "Web design",
  },
  {
    id: "applications",
    name: "Applications",
  },
  {
    id: "web-development",
    name: "Web development",
  },
];

const projectList: Project[] = [
  {
    tabId: "web-development",
    title: "Finance",
    image: "/assets/images/project-1.jpg",
    url: "https://www.google.com",
  },
  {
    tabId: "web-development",
    title: "Orizon",
    image: "/assets/images/project-2.png",
    url: "https://www.google.com",
  },
  {
    tabId: "web-design",
    title: "Fundo",
    image: "/assets/images/project-3.jpg",
    url: "https://www.google.com",
  },
  {
    tabId: "applications",
    title: "Brawlhalla",
    image: "/assets/images/project-4.png",
    url: "https://www.google.com",
  },
  {
    tabId: "web-design",
    title: "DSM.",
    image: "/assets/images/project-5.png",
    url: "https://www.google.com",
  },
  {
    tabId: "web-design",
    title: "MetaSpark",
    image: "/assets/images/project-6.png",
    url: "https://www.google.com",
  },
  {
    tabId: "web-development",
    title: "Summary",
    image: "/assets/images/project-7.png",
    url: "https://www.google.com",
  },
  {
    tabId: "applications",
    title: "Task Manager",
    image: "/assets/images/project-8.jpg",
    url: "https://www.google.com",
  },
  {
    tabId: "web-development",
    title: "Arrival",
    image: "/assets/images/project-9.png",
    url: "https://www.google.com",
  },
];

function PortfolioCard({ projectItem }: { projectItem: Project }) {
  return (
    <li
      className="project-item active"
      data-filter-item
      data-category={projectItem.tabId.toLowerCase()}
    >
      <Link href={projectItem.url} target="_blank" rel="noopener noreferrer">
        <figure className="project-img">
          <div className="project-item-icon-box">
            <Eye />
          </div>

          <Image
            src={projectItem.image}
            alt={projectItem.title}
            title={projectItem.title}
            loading="lazy"
            width={500}
            height={500}
          />
        </figure>

        <h3 className="project-title">{projectItem.title}</h3>

        <p className="project-category">
          {tabList &&
            tabList.length > 0 &&
            tabList.find((tab: Tab) => tab?.id === projectItem?.tabId)?.name}
        </p>
      </Link>
    </li>
  );
}

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
