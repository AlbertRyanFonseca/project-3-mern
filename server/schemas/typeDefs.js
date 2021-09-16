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
//  need to work this out
  }

  type Mutation {
//  need to work this out
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;