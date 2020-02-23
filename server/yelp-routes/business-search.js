import client from '../queries'



export default (req, res, next) => {
  const query = `
    query search($term: String, $location: String, $offset: Int, $limit: Int){
      search(
        term: $term,
        location: $location,
        offset: $offset,
        limit: $limit
      ) {
        total
        business {
          id
          name
          rating

          review_count
          location {
            address1
            city
            state
            country
          }
        }
      }
    }
  `
  client(query, req.body)
    .then((result) => res.json(result))
    .catch(err => res.json(err))

}



