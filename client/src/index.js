import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { gql, InMemoryCache } from 'apollo-boost'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
<<<<<<< Updated upstream
import {YELP_TOKEN} from './env'
console.log(process.env.YELP_TOKEN)

// when mode is commented out, authorization is displayed in headers, otherwise, it is not
const cache = new InMemoryCache()
const client = new ApolloClient({
  uri: "https://api.yelp.com/v3/graphql",
  // fetchOptions:{
  //   mode: "no-cors",
  // },
  request: async (operation) => {
    operation.setContext({
      mode: "no-cors",

      headers: {
        // "Authorization": `Bearer ${process.env.YELP_TOKEN}`,
        "Authorization": `Bearer ${YELP_TOKEN}`,
        "Content-Type": 'application/graphql',
        'Accept-Language': 'en-US',


      }
    })
  },
  cache: cache
})

client.query({
  query: gql`{
    search(term:"burrito", location:"san francisco") {
      total
      business {
        name
        reviews {
          text
          rating
          time_created
          url
        }
      }
    }
}
  `
}
).then(result => console.log(result))
.catch(error => console.log(error))
=======
import ApolloClient, { gql } from 'apollo-boost'


>>>>>>> Stashed changes

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
