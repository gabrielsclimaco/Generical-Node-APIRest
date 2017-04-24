module.exports = (env) => {
  var mongoose = require('mongoose')

  var databaseUri = 'mongodb://localhost:27017/generical-db'

  mongoose.connect(databaseUri, function (err, res) {
    if (err) {
      console.log('ERROR  connecting to: ' + databaseUri + '. ' + err);
    } else {
      console.log('Succeeded connected to: ' + databaseUri);
    }
  })

  var db = mongoose.connection

  db.on('open', () => {
    console.log('Conected in ' + databaseUri)
  })
}
