const { ApolloServer, gql } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');

const typeDefs = gql`
  type Query {
    test: String
  }
`;
const resolvers = {
  Query: {
    test: () => 'hello, world!',
  },
};

// Set up Apollo Server
const schema = buildFederatedSchema([{ typeDefs, resolvers }]);
const server = new ApolloServer({
  schema,
});

server
  .listen({ port: 4001 })
  .then(({ url }) => console.log(`🚀 app running at ${url}`));
