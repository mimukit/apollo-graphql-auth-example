const {
  SchemaDirectiveVisitor,
  AuthenticationError,
} = require('apollo-server-express');

class LowerCaseDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    field.resolve = async (result, args, ctx, info) => {
      if (typeof result[field.name] === 'string') {
        return result[field.name].toLowerCase();
      }
      return result[field.name];
    };
  }
}

class IsAuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    field.resolve = async (result, args, ctx, info) => {
      if (!ctx.user.id) {
        throw new AuthenticationError(
          'You must login to access one or more of those fields',
        );
      }
      return result[field.name];
    };
  }
}

module.exports = {
  LowerCaseDirective,
  IsAuthDirective,
};
