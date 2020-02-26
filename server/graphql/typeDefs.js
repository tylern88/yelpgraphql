import { gql } from 'apollo-server-express'
const schema = gql`
  type Query {
    users:[User!]
    user(id: ID!): User
    me: User
  }
  type User {
    id: ID!
    username: String!
  }
`;

export default schema