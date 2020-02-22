import {Router} from 'express'
import businessSearch from './business-search'

const router = Router()

router.post('/business/search', businessSearch)

// module.exports = router
export default router