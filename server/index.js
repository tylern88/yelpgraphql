require('dotenv').config()
const express = require('express')
const cors = require("cors")
const logger = require('morgan')
import yelpRoutes from './yelp-routes'
import apiRoutes from './routes'
const app = express()
app.use(
  cors(),
  express.json(),
  logger("dev")
)

app.use("/api", apiRoutes)
app.use("/yelp", yelpRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
})