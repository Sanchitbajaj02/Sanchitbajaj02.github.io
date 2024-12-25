import React from "react";
import Link from "next/link";
import Image from "next/image";
import { request } from "graphql-request";
import { API_ENDPOINT, GET_ALL_POSTS, NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST } from "@/lib/graphql";
import { PostsResponse, Post } from "@/types";

const fetchPosts = async (): Promise<PostsResponse | null> => {
  "use server";
  const data: PostsResponse = await request(API_ENDPOINT, GET_ALL_POSTS);

  if (!data || !data.publication || !data.publication.posts) {
    return null;
  }

  return data;
};

export default async function BlogPage() {
  const apiData: PostsResponse | null = await fetchPosts();

  const posts = apiData?.publication.posts.edges;

  return (
    <article className="blog active" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
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
                    tabIndex={1}
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

                        {/* <span className="dot"></span> */}

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

                      <h3 className="h3 blog-item-title">{post.node.title}</h3>

                      {/* <p className="blog-text">
                        Veritatis et quasi architecto beatae vitae dicta sunt,
                        explicabo.
                      </p> */}
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
