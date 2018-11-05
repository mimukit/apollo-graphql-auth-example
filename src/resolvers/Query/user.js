const { AuthenticationError } = require('apollo-server-express');

const User = {
  notes: (parent, args, ctx) =>
    ctx.db.notes.filter(note => note.authorId === parent.id),
};

const UserQuries = {
  users: (parent, args, ctx) => ctx.db.users,

  me(parent, args, ctx) {
    if (!ctx.user.id) {
      throw new AuthenticationError('No user logged in');
    }

    return ctx.db.users.find(user => user.id === ctx.user.id);
  },
};

module.exports = {
  User,
  UserQuries,
};
