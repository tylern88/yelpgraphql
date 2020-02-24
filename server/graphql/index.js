import {  gql } from 'apollo-server-express'

export const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`

const books = [
  {
    title: "Twilight",
    author: "asdfasdf"
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton'
  }
]

export const resolvers = {
  Query: {
    books: () => books
  }
}