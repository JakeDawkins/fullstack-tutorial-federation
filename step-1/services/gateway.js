const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');

const gateway = new ApolloGateway({
  serviceList: [{ name: 'monolith', url: 'http://localhost:4000/graphql' }],
});

(async () => {
  const { schema, executor } = await gateway.load();

  const server = new ApolloServer({ schema, executor });

  server.listen({ port: 4444 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
})();
