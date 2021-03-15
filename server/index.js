const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const Knex = require('knex');
const { migrateDB } = require('graphql-migrations');
const { createKnexDbProvider } = require("@graphback/runtime-knex");
const dbConfig = require("../knexfile.js");

//create the connection to the database
const db = Knex(dbConfig);

//create the table in the database
migrateDB(dbConfig, typeDefs, { }).then(() => {console.log("Migrated database");});

//create the postgres data provider
const dataProviderCreator = createKnexDbProvider(db);

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(
    `Running a GraphQL API server with Apollo at localhost:${PORT}/graphql`
  );
});