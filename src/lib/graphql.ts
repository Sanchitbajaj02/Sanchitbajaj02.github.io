import { gql } from "graphql-request";

export const API_ENDPOINT = "https://gql.hashnode.com";

export const NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST = "solitrix02.hashnode.dev";

export const GET_ALL_POSTS = gql`
  query PostsByPublication {
    publication(host: "${NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST}") {
      id
      posts(first: 10) {
        edges {
          node {
            id
            title
            author{
              name
              profilePicture
            }
            coverImage{
              url
            }
            publishedAt
            slug
            tags {
              id
              name
            }
          }
        }
      }
    }
  }
`;
