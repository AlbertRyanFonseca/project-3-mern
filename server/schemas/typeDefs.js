const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Post {
    _id: ID
    description: String
    createdAt: String
    username: String
  }

  type Query {
  }

  type Mutation {
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;