const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

// Provide resolver functions for your schema fields

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  const app = express();
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
