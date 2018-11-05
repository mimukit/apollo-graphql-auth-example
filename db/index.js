const users = [
  {
    id: 1,
    name: 'John Snow',
    email: 'john@example.com',
    password: '$2a$10$XOK4dLNb1MRYqtqjKEm80uf4v1z/ny6NSs7Pq2j60QEqCKDsNNxDy',
  },
  {
    id: 2,
    name: 'Annabel Ghost',
    email: 'anna@example.com',
    password: '$2a$10$kfjlcVjuOI7GfRybfnkq1ObAcqqaul2C0ULA/8WrTnQVQXGznDu8.',
  },
];

const notes = [
  {
    id: 1,
    title: 'Note 1',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, amet?',
    authorId: 1,
  },

  {
    id: 2,
    title: 'Note 2',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, amet?',
    authorId: 2,
  },

  {
    id: 3,
    title: 'Note 3',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, amet?',
    authorId: 1,
  },
];

module.exports = {
  users,
  notes,
};
