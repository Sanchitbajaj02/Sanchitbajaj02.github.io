export type Post = {
  node: {
    coverImage: {
      url: string;
    };
    title: string;
    publishedAt: string;
    slug: string;
  };
};

export type PostsResponse = {
  publication: {
    posts: {
      edges: Post[];
    };
  };
};