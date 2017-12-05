require('dotenv').config()
const PouchDB = require('pouchdb')
PouchDB.plugin(require('pouchdb-find'))
const HTTPError = require('node-http-error')
const db = new PouchDB(process.env.COUCHDB_URL + process.env.COUCHDB_NAME)
const { pluck } = require('ramda')

const get = id => db.get(id)

const allDocs = options => {
  return db.allDocs(options).then(docs => pluck('doc', docs.rows))
}

const findDocs = query => {
  console.log('query', query)
  if (query) {
    return db.find(query).then(res => res.docs)
  } else {
    return []
  }
}

const dalHelper = {
  allDocs,
  get,
  findDocs
}

module.exports = dalHelper
