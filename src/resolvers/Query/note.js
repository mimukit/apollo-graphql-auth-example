const Note = {
  author: (parent, args, ctx) =>
    ctx.db.users.find(user => user.id === parent.authorId),
};

const NoteQuries = {
  notes: (parent, args, ctx) => ctx.db.notes,
};

module.exports = {
  Note,
  NoteQuries,
};
