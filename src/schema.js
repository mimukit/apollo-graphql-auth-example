const { gql } = require('apollo-server-express');

const typeDefs = gql`
  directive @lower on FIELD_DEFINITION
  directive @isAuth on FIELD_DEFINITION
  directive @hasRole(role: Role = USER) on OBJECT | FIELD_DEFINITION

  enum Role {
    ADMIN
    OWNER
    USER
  }

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
    email: String! @lower
    roles: [Role!]!
    notes: [Note!]
  }

  type Note {
    id: ID!
    title: String! @hasRole(role: USER)
    text: String! @isAuth
    author: User!
  }
`;

module.exports = {
  typeDefs,
};
