
var knex = require('knex')
var dbConfig = require('./knexfile').development

var db = knex(dbConfig)

var sectionToQuery = 'dell border'

// db.raw('SELECT * FROM sections INNER JOIN activities ON sections.id = activities.sectionId WHERE name = ?;', [sectionToQuery])
//   .then( data => console.log(data) )   // do something with the data you asked for
//   .catch( err => console.log('there was an error', err)  )


db.table('sections')
  .leftJoin('activities', 'sections.id', '=', 'activities.sectionId')
  .select('*')
  .select('sections.id AS id')
  .select('activities.id AS activityId')
  // .where({ name: sectionToQuery })
  .asCallback( (err, data) => {
    if (err) throw err

    console.log('data', data)
  })

