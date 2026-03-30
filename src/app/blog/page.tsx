import React from "react";
import Link from "next/link";
import Image from "next/image";
import { request } from "graphql-request";
import type { Metadata } from "next";

import {
  API_ENDPOINT,
  GET_ALL_POSTS,
  NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
} from "@/lib/graphql";
import { PostsResponse, Post, Tag } from "@/types";

export const revalidate = 86400; // revalidate at most every day

const fetchPosts = async (): Promise<PostsResponse | null> => {
  "use server";
  const data: PostsResponse = await request(API_ENDPOINT, GET_ALL_POSTS);

  if (!data || !data.publication || !data.publication.posts) {
    return null;
  }

  return data;
};

export const metadata: Metadata = {
  title: "Tech Blog — Sanchit Bajaj | JavaScript, React, System Design",
  description:
    "Read Sanchit Bajaj's articles on JavaScript, TypeScript, React, Next.js, system design, and full-stack engineering. Published on Hashnode.",
  keywords: [
    "Sanchit Bajaj blog",
    "JavaScript tutorials",
    "React articles",
    "Next.js blog",
    "system design blog India",
    "full stack developer writing",
    "TypeScript tips",
    "Node.js articles",
    "software engineering blog",
    "solitrix02 hashnode",
  ],
};

export default async function BlogPage() {
  const apiData: PostsResponse | null = await fetchPosts();

  const posts = apiData?.publication.posts.edges;

  return (
    <article className="blog active" data-page="blog">
      <header>
        <h2 className="h2 article-title">My Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {posts &&
            posts.map((post: Post, idx: number) => {
              return (
                <li className="blog-post-item" key={idx}>
                  <Link
                    href={`https://${NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST}/${post.node.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <figure className="blog-banner-box">
                      <Image
                        src={post.node.coverImage.url}
                        alt={post.node.title}
                        width={2000}
                        height={1000}
                        loading="lazy"
                      />
                    </figure>

                    <div className="blog-content">
                      <div className="blog-meta">
                        <p className="blog-category">Published on</p>

                        <time dateTime={post.node.publishedAt}>
                          {new Date(post.node.publishedAt).toLocaleDateString(
                            "en-IN",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </time>
                      </div>

                      <h4 className="h4 blog-item-title">{post.node.title}</h4>

                      {post.node.brief && (
                        <p
                          className="blog-text"
                          style={{
                            fontSize: "13px",
                            lineHeight: 1.6,
                            opacity: 0.8,
                            marginTop: "6px",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {post.node.brief}
                        </p>
                      )}

                      <div className="flex flex-row gap-2 flex-wrap mt-2">
                        {post.node.tags &&
                          post.node.tags.map((tag: Tag) => (
                            <small className="blog-text" key={tag.id}>
                              #{tag.name}
                            </small>
                          ))}
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
        </ul>
      </section>

      <section
        style={{
          marginTop: "40px",
          padding: "24px",
          borderRadius: "12px",
          background: "var(--bg-gradient-jet)",
          border: "1px solid hsl(0,0%,22%)",
          textAlign: "center",
        }}
      >
        <h3 className="h3" style={{ marginBottom: "8px" }}>
          Enjoy the articles?
        </h3>
        <p
          className="blog-text"
          style={{ marginBottom: "16px", opacity: 0.8 }}
        >
          Follow my Hashnode publication for new posts on JavaScript, React,
          system design, and full-stack engineering.
        </p>
        <Link
          href={`https://${NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 20px",
            borderRadius: "8px",
            background: "linear-gradient(to right, hsl(45,100%,72%), hsl(35,100%,68%))",
            color: "hsl(240,2%,12%)",
            fontWeight: 600,
            fontSize: "14px",
            textDecoration: "none",
          }}
        >
          Follow on Hashnode
        </Link>
      </section>
    </article>
  );
}
