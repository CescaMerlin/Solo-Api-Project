const { gql } = require("apollo-server");

const typeDefs = gql`
  # Your schema goes here.
  # The schema should model the full data object available!
  
  type Bird {
    category: String!
    name: String
    scientificName: String!
    activity: String
    prey: [String]
    brood: Int
    range: [Region]
    images: [Image]
  }

  type Region {
    continent: [String!]
    area: [String]
    climate: [String]
    native: [Bird]
  }

  type Image {
    category: String!
    name: String!
    urls: [String]
  }

  type Query {
    GetAllBirds: [Bird]
    GetBird(name: String, scientificName: String): Bird
  }

`;

module.exports = typeDefs;