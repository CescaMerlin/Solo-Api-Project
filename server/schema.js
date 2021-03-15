//const { gql } = require("apollo-server");

const typeDefs = `
  # Your schema goes here.
  # The schema should model the full data object available!
  
  """
  @model
  """

  type Bird {
    id: ID!
    category: String!
    name: String
    scientificName: String!
    activity: String
    prey: [String]
    brood: Int
    """
    @oneToMany(field: 'range')
    """
    range: [Region]
    """
    @oneToMany(field: 'images')
    """
    images: [Image]
  }

  """
  @model
  """

  type Region {
    id: ID!
    continent: [String!]
    area: [String]
    climate: [String]
    native: [Bird]
  }

  """
  @model
  """

  type Image {
    id: ID!
    category: String!
    """
    @oneToOne
    """
    bird: Bird!
    url: String
  }

  type Query {
    GetAllBirds: [Bird]
    GetBird(name: String, scientificName: String): Bird
  }

`;

module.exports = typeDefs;