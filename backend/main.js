import express from 'express'
import fs from 'fs';

const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));


const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
