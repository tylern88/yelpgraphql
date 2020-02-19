import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient, { gql } from 'apollo-boost'
const uri = "https://api.yelp.com/v3/graphql"

const client = new ApolloClient({
  uri: uri,

  // request: operation => {
  //   operation.setContext({
  //     headers: {
  //       'Authorization': 'Bearer LFYNZs7r476JEfXOxUeTEEh0brQmEgmoc_Wbpt2ksdnikZcNzIvK1l1A1__jEPBLpbsNEVGrOFzbeNrpi4a6-QeeUnXYo9PxyUkL8s98_U2mAStm53k8KcIjF9BJXnYx',
  //       'mode': 'no-cors'
  //     }
  //   })
  // }
  fetchOptions: {
    mode: 'no-cors',
    headers: {
      'Authorization': 'Bearer LFYNZs7r476JEfXOxUeTEEh0brQmEgmoc_Wbpt2ksdnikZcNzIvK1l1A1__jEPBLpbsNEVGrOFzbeNrpi4a6-QeeUnXYo9PxyUkL8s98_U2mAStm53k8KcIjF9BJXnYx'
    }
  },
//   fetch: fetch('https://api.yelp.com/v3/graphql', {
//   method: 'POST',
//   headers: {
//     'Authentication': 'Bearer LFYNZs7r476JEfXOxUeTEEh0brQmEgmoc_Wbpt2ksdnikZcNzIvK1l1A1__jEPBLpbsNEVGrOFzbeNrpi4a6-QeeUnXYo9PxyUkL8s98_U2mAStm53k8KcIjF9BJXnYx',
//     'Content-Type': 'application/json',

//   }
// })
})

client.query({
  query: gql`
    query search {
      business(id: "garaje-san-francisco") {
        name
        id
        alias
        rating
        url
      }
    }
  `
}).then(response => console.log(response))
.catch(error => console.log(error.stack))

// fetch('https://api.yelp.com/v3/graphql', {
//   method: 'POST',
//   headers: {
//     'Authentication': 'Bearer LFYNZs7r476JEfXOxUeTEEh0brQmEgmoc_Wbpt2ksdnikZcNzIvK1l1A1__jEPBLpbsNEVGrOFzbeNrpi4a6-QeeUnXYo9PxyUkL8s98_U2mAStm53k8KcIjF9BJXnYx',
//     'Content-Type': 'application/json',
//     mode: 'no-cors'
//   }
// })

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
