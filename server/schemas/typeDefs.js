const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    posts: [Post]
  }

  type Post {
    _id: ID
    description: String
    category: String
    createdAt: String
    username: String
  }

  type Query {
    posts(username: String): [Post]
    post(_id: ID!): Post
    category(category: String): [Post]
  }
  
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(description: String!, category: String!): Post
  }

  type Auth {
    token: ID!
    user: User
  }
`;

// export typeDefs
module.exports = typeDefs;