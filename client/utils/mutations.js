import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($description: String!) {
    addThought(description: $description) {
      postId
      description
      createdAt
      username
    }
  }
`;

export const REMOVE_POST = gql`
  mutation removePost($description: String!) {
    addThought(description: $description) {
      postId
      description
      createdAt
      username
    }
  }
`;
