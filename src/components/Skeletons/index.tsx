export const ProjectCardSkeleton = () => (
  <li className="project-item active" aria-hidden="true">
    <div className="skeleton" style={{ width: "100%", height: 200, borderRadius: 16, marginBottom: 15 }} />
    <div className="skeleton" style={{ width: "70%", height: 16, marginLeft: 10, marginBottom: 8 }} />
    <div className="skeleton" style={{ width: "40%", height: 12, marginLeft: 10 }} />
  </li>
);

export const ProjectListSkeleton = ({ count = 6 }: { count?: number }) => (
  <ul className="project-list">
    {Array.from({ length: count }).map((_, i) => (
      <ProjectCardSkeleton key={i} />
    ))}
  </ul>
);

export const BlogPostSkeleton = () => (
  <li className="blog-post-item" aria-hidden="true">
    <div style={{ padding: 0 }}>
      <div className="skeleton" style={{ width: "100%", height: 200, borderRadius: 12, marginBottom: 15 }} />
      <div className="skeleton" style={{ width: "30%", height: 12, marginBottom: 10 }} />
      <div className="skeleton" style={{ width: "80%", height: 18, marginBottom: 8 }} />
      <div className="skeleton" style={{ width: "60%", height: 14 }} />
    </div>
  </li>
);

export const BlogListSkeleton = ({ count = 4 }: { count?: number }) => (
  <ul className="blog-posts-list">
    {Array.from({ length: count }).map((_, i) => (
      <BlogPostSkeleton key={i} />
    ))}
  </ul>
);
