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
          photos
          hours {
            is_open_now
            open {
              is_overnight
              end
              start
              day
            }
          }
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

  export default query