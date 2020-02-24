import { businessSearch, query } from '../queries'


export default (req, res, next) => {

  query(businessSearch, req.body)
    .then( result => res.json(result))
    .catch(err => res.send(err))

}



