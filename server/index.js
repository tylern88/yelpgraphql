require('dotenv').config()
const express = require('express')
const cors = require("cors")
const logger = require('morgan')
import yelpRoutes from './yelp-routes'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs, resolvers } from './graphql'

const server = new ApolloServer({ typeDefs, resolvers })

const app = express()
server.applyMiddleware({app})
app.use(
  cors(),
  express.json(),
  logger("dev")
)

app.use("/yelp", yelpRoutes)

app.post

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
})