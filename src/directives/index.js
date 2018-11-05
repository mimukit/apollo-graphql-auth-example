const { SchemaDirectiveVisitor } = require('apollo-server-express');
const { defaultFieldResolver } = require('graphql');

class LowerCaseDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    // eslint-disable-next-line
    field.resolve = async (...args) => {
      const result = await resolve.apply(this, args);
      console.log('Directives', result);
      if (typeof result === 'string') {
        return result.toLowerCase();
      }
      return result;
    };
  }
}

module.exports = {
  LowerCaseDirective,
};
