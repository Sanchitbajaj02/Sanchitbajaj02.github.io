import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import { Post } from "@/types";

import { formatDate } from "@/lib/format-date";
import { getBlogs } from "@/lib/get-blog";

export const revalidate = 86400; // revalidate at most every day

export const metadata: Metadata = {
  title: "Blogs - Sanchit Bajaj",
};

export default async function BlogPage() {
  const posts = await getBlogs();

  return (
    <article className="blog active" data-page="blog">
      <header>
        <h2 className="h2 article-title">My Blogs</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {posts &&
            posts.map((post: Post, idx: number) => {
              return (
                <li
                  className="blog-post-item hover-lift fade-in-up"
                  style={{ animationDelay: `${idx * 70}ms` }}
                  key={idx}
                >
                  <Link href={post.url} target="_blank" tabIndex={1}>
                    <figure className="blog-banner-box">
                      <Image
                        src={post.social_image}
                        alt={post.title}
                        width={2000}
                        height={1000}
                        loading="lazy"
                      />
                    </figure>

                    <div className="blog-content">
                      <div className="blog-meta">
                        <p className="blog-category">Published on</p>

                        {/* <span className="dot"></span> */}

                        <time dateTime={post.published_at}>
                          {formatDate(post.published_at)}
                        </time>
                      </div>

                      <h4 className="h4 blog-item-title">{post.title}</h4>

                      <div className="flex flex-row gap-2 flex-wrap">
                        {post.tag_list &&
                          post.tag_list.length > 0 &&
                          post.tag_list.map((tag: string, i: number) => {
                            return (
                              <small className="blog-text" key={i}>
                                #{tag}
                              </small>
                            );
                          })}
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
        </ul>
      </section>
    </article>
  );
}
