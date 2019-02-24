const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

const environment = process.env.port || 'development'
const config = require('./knexfile.js')[environment]
const knex = require('knex')(config)

const port = 8000

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.disable('x-powered-by')

const table = 'Bosses'

app.get('/', (req, res, next) => {
  knex('Bosses')
  .join('Locations', 'Bosses.location_id', 'Locations.location_id')
  .then((rows) => res.status(200).send(rows))
  .catch(err => {
    next(err)
  })
})



app.use((req, res, next) => {
  res.status(500).send('Something Broke!')
})

app.listen(port, () => {
  console.log('Server is running on port:', port)
})