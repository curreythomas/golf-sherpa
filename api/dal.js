const { allDocs, get, findDocs } = require('./lib/dal-helper')
const { split, head, last } = require('ramda')

const listFaqs = options => allDocs(options || { include_docs: true })

const getCourse = id => get(id)

const listCourses = filter => {
  var query = {}
  if (filter) {
    // filter="golfers:4"
    const arrFilter = split(':', filter)
    const filterField = head(arrFilter)
    const filterValue = last(arrFilter)

    const selectorValue = {}
    selectorValue[filterField] = filterValue
    query = { selector: selectorValue }
  } else {
    query = {
      selector: {
        type: 'course'
      }
    }
  }
  return findDocs(query)
}

const dal = {
  listFaqs,
  listCourses,
  getCourse
}

module.exports = dal
