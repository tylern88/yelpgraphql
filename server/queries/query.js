import dotEnv from 'dotenv'
const graphQL = require('graphql-request')
const GraphQLClient = graphQL.GraphQLClient

const yelpApiUrl = 'https://api.yelp.com/v3/graphql'

dotEnv.config()

const { YELP_TOKEN } = process.env

const client = new GraphQLClient(yelpApiUrl, {
  headers: {
    Authorization: `Bearer ${YELP_TOKEN}`
  }
})

export default (query, request) =>
  client.request(query, request)
    .then((data) => Promise.resolve(data))
    .catch((err) => Promise.reject(err))