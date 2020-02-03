const Hapi = require('@hapi/hapi');
const { ApolloServer } = require('apollo-server-hapi');
const typeDefs = require('../graphql/schema');
const resolvers = require('../graphql/resolvers');

const HOST = 'localhost';
const PORT = 3000;



async function StartServer() {
  const server = new ApolloServer({ typeDefs, resolvers });

  const app = new Hapi.server({
    host: HOST,
    port: PORT,
  });

  await server.applyMiddleware({
    app,
  });
  await server.installSubscriptionHandlers(app.listener);

  try {
    await app.start();
  } catch (err) {
    console.log(`Error while starting server: ${err.message}`);
  }

  console.log(`Server running at: ${app.info.uri}`);
}

StartServer();