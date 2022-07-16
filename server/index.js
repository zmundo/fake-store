import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'

const app = express()
const port = 8000
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static('dist'))

app.get('/users', (req, res) => {
  res.send('return list of users')
})

app.get('*', (req, res) => { 
  res.sendFile(path.join(__dirname, '../', 'index.html'))
})

app.listen(port, () => {
  console.log('app listening on port 8000')
})