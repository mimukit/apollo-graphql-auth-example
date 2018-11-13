require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const { typeDefs } = require('./schema');
const resolvers = require('./resolvers');
const {
  LowerCaseDirective,
  IsAuthDirective,
  HasRoleDirective,
} = require('./directives');

const AuthService = require('./services/AuthService');
const { users, notes } = require('../db');

const PORT = process.env.PORT || 4000;

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives: {
    lower: LowerCaseDirective,
    isAuth: IsAuthDirective,
    hasRole: HasRoleDirective,
  },
  context: ({ req }) => {
    const user = AuthService.getUser(req);

    return { user, db: { users, notes } };
  },
});
server.applyMiddleware({ app });

app.listen({ port: PORT }, () => console.log('Server started'));
