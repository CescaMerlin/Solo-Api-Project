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
    findBirds(filter: BirdFilter, orderBy: OrderByInput): BirdResultList!
    getBird(name: String, scientificName: String): Bird
  }

  type Mutation {
    addBird(input: CreateBirdInput!): Bird
    addImage(input: CreateImageInput!): Image
    addRegion(input: CreateRegionInput!): Region
    updateBird(input: MutateBirdInput!): Bird
    updateImage(input: MutateImageInput!): Image
    updateRegion(input: MutateRegionInput!): Region
    deleteBird(input: MutateBirdInput!): Bird
    deleteImage(input: MutateImageInput!): Image
    deleteRegion(input: MutateRegionInput!): Region
  }

`;

module.exports = typeDefs;