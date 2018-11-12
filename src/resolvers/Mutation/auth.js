const { AuthenticationError } = require('apollo-server-express');

const AuthService = require('../../services/AuthService');

const Auth = {
  async signup(parent, { name, email, password }, ctx) {
    const hashPassword = await AuthService.getHashPassword(password);

    const user = {
      id: ctx.db.users.length + 1,
      name,
      email: email.toLowerCase(),
      password: hashPassword,
      roles: ['USER'],
    };

    ctx.db.users.push(user);

    return {
      token: AuthService.getToken({ id: user.id, roles: user.roles }),
      user,
    };
  },

  async login(parent, { email, password }, ctx) {
    const user = ctx.db.users.find(u => u.email === email.toLowerCase());
    if (!user) {
      throw new AuthenticationError(`No such user found for email: ${email}`);
    }

    const valid = await AuthService.checkPassword(password, user.password);

    if (!valid) {
      throw new AuthenticationError('Invalid password');
    }

    return {
      token: AuthService.getToken({ id: user.id, roles: user.roles }),
      user,
    };
  },
};

module.exports = { Auth };
