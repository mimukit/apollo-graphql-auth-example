const { User, UserQuries } = require('./Query/user');
const { Note, NoteQuries } = require('./Query/note');

const { Auth } = require('./Mutation/auth');

const { NoteSub } = require('./Subscription/note');

module.exports = {
  Query: {
    ...UserQuries,
    ...NoteQuries,
  },
  Mutation: {
    ...Auth,
  },
  Subscription: {
    ...NoteSub,
  },
  User,
  Note,
};
