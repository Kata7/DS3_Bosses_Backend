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
  .select('boss_name', 'boss_id', 'location_name')
  .join('Locations', 'Bosses.location_id', 'Locations.location_id')
  .then((bosses) => {
    const bossesWithWeaknesses = bosses.map((boss) => {
      const damageArray = []
      return knex('Weaknesses')
      .where({boss_id: boss.boss_id})
      .select('damage_id')
      .then(weaknesses => {
        const getDamages = weaknesses.map((weakness) => {
          return knex('DamageTypes')
          .where({damage_id: weakness.damage_id})
          .select('damage_name').first()
          .then(damage => {
            console.log('damages', damage)
            damageArray.push(damage.damage_name)
            boss.weaknesses = damageArray
            return boss
          }) 
        })
      return Promise.all(getDamages)
      })
    })
    return Promise.all(bossesWithWeaknesses)
  })
  .then(rows => {
    res.send(rows)
  })
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