export type Post = {
  node: {
    coverImage: {
      url: string;
    };
    title: string;
    publishedAt: string;
    slug: string;
    tags: Tag[]
  };
};

export type Tag = {
  id: string;
  name: string;
}

export type PostsResponse = {
  publication: {
    posts: {
      edges: Post[];
    };
  };
};