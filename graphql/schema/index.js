const { gql } = require("apollo-server-express");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }

  type Mutation {
    testMutation(name: String!): String
  }
`;

module.exports = typeDefs;
