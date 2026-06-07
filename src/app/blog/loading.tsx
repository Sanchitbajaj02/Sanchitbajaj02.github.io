import { BlogListSkeleton } from "@/components/Skeletons";

export default function BlogLoading() {
  return (
    <article className="blog active" data-page="blog">
      <header>
        <h2 className="h2 article-title">My Blogs</h2>
      </header>
      <section className="blog-posts">
        <BlogListSkeleton />
      </section>
    </article>
  );
}
