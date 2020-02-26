import {  gql } from 'apollo-server-express'
import { userResolver } from './resolvers/users'

export { default as typeDefs} from './typeDefs'


export const resolvers = {
  ...userResolver
}