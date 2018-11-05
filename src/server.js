require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const { typeDefs } = require('./schema');
const resolvers = require('./resolvers');

const AuthService = require('./services/AuthService');
const { users, notes } = require('../db');

const PORT = 4000;

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const user = AuthService.getUser(req);

    return { user, db: { users, notes } };
  },
});
server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  // eslint-disable-next-line
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`),
);
