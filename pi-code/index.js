const assert = require('assert')
const Raspi = require('raspi-io').RaspiIO
const five = require('johnny-five')
const MongoClient = require('mongodb').MongoClient

const board = new five.Board({
  io: new Raspi()
})

const dburl = 'mongodb://localhost:27018'
const client = new MongoClient(dburl)
let db = null
client.connect((err) => {
  assert.equal(null, err)
  console.log('connected to server')
  db = client.db('test')
})

board.on('ready', () => {
  let temp = new five.Multi({
    controller: 'SI7020',
    freq: 3000
  })

  temp.on('change', async function(){
    if(!db){
      console.log('DB not ready!')
    } else {
      const r = await db.collection('officetemps').insertOne({
        time: new Date().toDateString(),
        temp: this.thermometer.celsius
      })
      assert.equal(1, r.insertedCount)
    }
    console.log(this.thermometer.celsius)
  })
})