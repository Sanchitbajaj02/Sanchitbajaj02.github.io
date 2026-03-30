import type { Metadata } from "next";
import PortfolioFilter from "@/components/PortfolioFilter";

export const metadata: Metadata = {
  title: "Projects — Sanchit Bajaj | Web & Mobile Development Portfolio",
  description:
    "Browse Sanchit Bajaj's portfolio of web and mobile development projects — from full-stack web apps and React Native applications to UI/UX designs and blockchain platforms.",
  keywords: [
    "Sanchit Bajaj portfolio",
    "full stack developer projects",
    "React projects",
    "Next.js projects",
    "Node.js projects",
    "React Native apps",
    "web development portfolio India",
    "software engineer projects",
  ],
};

export default function PortfolioPage() {
  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <PortfolioFilter />
    </article>
  );
}
