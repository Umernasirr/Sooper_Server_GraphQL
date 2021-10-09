const Mutation = {
  testMutation: (_, { name }) => {
    return `Hello ${name}`;
  },
};

module.exports = Mutation;
