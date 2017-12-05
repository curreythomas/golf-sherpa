require('dotenv').config()
const PouchDB = require('pouchdb')
PouchDB.plugin(require('pouchdb-find'))

const db = new PouchDB(process.env.COUCHDB_URL + process.env.COUCHDB_NAME)

db
  .createIndex({ index: { fields: ['golfers'] } })
  .then(() => {
    console.log('Created an index on the golfers field.')
  })
  .catch(err => console.log(err))

db
  .createIndex({ index: { fields: ['holes'] } })
  .then(() => {
    console.log('Created an index on the holes field.')
  })
  .catch(err => console.log(err))

db
  .createIndex({ index: { fields: ['time'] } })
  .then(() => {
    console.log('Created an index on the time field.')
  })
  .catch(err => console.log(err))

db
  .createIndex({ index: { fields: ['rate'] } })
  .then(() => {
    console.log('Created an index on the rate field.')
  })
  .catch(err => console.log(err))

db
  .createIndex({ index: { fields: ['type'] } })
  .then(() => {
    console.log('Created an index on the type field.')
  })
  .catch(err => console.log(err))

db
  .createIndex({ index: { fields: ['city'] } })
  .then(() => {
    console.log('Created an index on the city field.')
  })
  .catch(err => console.log(err))
