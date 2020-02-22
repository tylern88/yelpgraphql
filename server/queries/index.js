const graphQL = require('graphql-request')
const GraphQLClient = graphQL.GraphQLClient
const yelpApiUrl = 'https://api.yelp.com/v3/graphql'
const client = new GraphQLClient(yelpApiUrl, {
  headers: {
    Authorization: `Bearer ${process.env.YELP_TOKEN}`
  }
})


module.exports = (query, request) =>
  client.request(query, request)
    .then((data) => Promise.resolve(data))
    .catch((err) => Promise.reject(err))