import dotEnv from 'dotenv'
import mongoose from 'mongoose'

dotEnv.config()

export default  () => {
  return mongoose.connect(`${process.env.MONGO_CONNECTION}`)
}