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

export type Tab = {
  id: string;
  name: string;
}

export type Project = {
  tabId: string;
  title: string;
  image: string;
  url: string;
  techStack?: string[]
};

