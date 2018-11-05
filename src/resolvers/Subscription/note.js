const NoteSub = {
  noteSubscription: {
    subscribe: (parent, args, ctx) => ctx.db.notes,
  },
};

module.exports = { NoteSub };
