const { gql } = require('apollo-server-hapi');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book!]
    book(id: ID!): Book!
    authors: [Author!]
    author(id: ID!): Author!
    weather(city: String!): Weather!
  }

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    id: ID
    title: String!
  }

  type Author {
    id: ID
    name: String!
    books: [Book!]
  }

  type Weather {
    current: Current!
    forecast: Forecast!
  }

  type Current @cacheControl(maxAge: 30) {
    temperature: Float!
    feels_like: Float
    description: String!
    icon: String!
  }

  type Forecast {
    list: [Day]
  }

  type Day {
    date: String
    min: Float
    max: Float
  }
`;
module.exports = typeDefs;