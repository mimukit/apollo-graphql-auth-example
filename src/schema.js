const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    notes: [Note!]!
    note(id: ID!): Note
    users: [User!]!
    me: User
  }

  type Mutation {
    signup(name: String!, email: String!, password: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
    createNote(title: String!, text: String!): Note!
    deleteNote(id: ID!): Note!
  }

  type Subscription {
    noteSubscription: NoteSubscriptionPayload!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type NoteSubscriptionPayload {
    note: Note
  }

  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    notes: [Note!]
  }

  type Note {
    id: ID!
    title: String!
    text: String!
    author: User!
  }
`;

module.exports = {
  typeDefs,
};
