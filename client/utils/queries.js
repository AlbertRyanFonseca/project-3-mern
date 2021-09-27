import gql from 'graphql-tag';



export const QUERY_POST = gql`
  query post($id: ID!) {
    post(_id: $id) {
      postId
      description
      createdAt
      username
    }
  }
`;


export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      posts {
        postId
        description
        createdAt
        username
      }
      
    }
  }
`;

