require('dotenv').config()
const express = require('express')
const cors = require("cors")
const logger = require('morgan')
import yelpRoutes from './yelp-routes'
<<<<<<< HEAD
import { ApolloServer } from 'apollo-server-express'
import { typeDefs, resolvers } from './graphql'

const server = new ApolloServer({ typeDefs, resolvers })

=======
import apiRoutes from './routes'
>>>>>>> 429cf7eb042e80e5647deac91a231caaa0152f25
const app = express()
server.applyMiddleware({app})
app.use(
  cors(),
  express.json(),
  logger("dev")
)

app.use("/api", apiRoutes)
app.use("/yelp", yelpRoutes)

app.post

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
})