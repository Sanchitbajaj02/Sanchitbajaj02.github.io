export default function ResumeLoading() {
  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">My Resume</h2>
      </header>
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="skeleton" style={{ width: "100%", height: 80 }} />
        ))}
      </div>
    </article>
  );
}
