import 'dotenv/config'
import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'
import mongoose from 'mongoose'
import process from 'node:process'

const app = express()
const port = 8000
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const uri = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_SECRET}@fake-store.6kqqimz.mongodb.net/?retryWrites=true&w=majority`
const main = async () => {
  await mongoose.connect(uri)
}

app.use(express.static('dist'))

app.get('/users', async (req, res) => {
  main()
  .then(() => {
    mongoose.connection.close()  
    res.send('connection successful')
  })
  .catch(e => res.send(e))
})

app.get('*', (req, res) => { 
  res.sendFile(path.join(__dirname, '../', 'index.html'))
})

app.listen(port, () => {
  console.log('app listening on port 8000')
})