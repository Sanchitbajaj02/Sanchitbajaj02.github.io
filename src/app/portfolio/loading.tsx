import { ProjectListSkeleton } from "@/components/Skeletons";

export default function PortfolioLoading() {
  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      <section className="projects">
        <ProjectListSkeleton />
      </section>
    </article>
  );
}
