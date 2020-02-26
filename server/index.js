require('dotenv').config()
const express = require('express')
const cors = require("cors")
const logger = require('morgan')
import yelpRoutes from './yelp-routes'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs, resolvers } from './graphql'
import { users } from './graphql/resolvers/users'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context : {
    me: users[1]
  }
})

import apiRoutes from './routes'
import connectDb from './config'


const app = express()
server.applyMiddleware({app, path:'/graphql'})

app.use(
  cors(),
  express.json(),
  logger("dev"),
)

// app.use("/api", apiRoutes)
app.use("/yelp", yelpRoutes)



connectDb().then(async () => {
  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );
});



