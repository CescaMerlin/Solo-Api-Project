const { ApolloServer } = require("apollo-server");
const { buildGraphbackAPI } = require("graphback");
const schema = require("./schema");
const Knex = require('knex');
const { migrateDB } = require('graphql-migrations');
const { createKnexDbProvider } = require("@graphback/runtime-knex");
const dbConfig = require("../knexfile.js");


//create the connection to the database
const db = Knex(dbConfig);

//create the table in the database
migrateDB(dbConfig, schema, { }).then(() => {console.log("Migrated database");});

//create the postgres data provider
const knexDbProviderCreator = createKnexDbProvider(db);

// creates a schema, CRUD resolvers, services and data providers
const { typeDefs, resolvers, contextCreator } = buildGraphbackAPI(schema, {
  dataProviderCreator: knexDbProviderCreator
});

const server = new ApolloServer({
  typeDefs,
  resolvers: [resolvers],
  context: contextCreator
});

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(
    `Running a GraphQL API server with Apollo at localhost:${PORT}/graphql`
  );
});