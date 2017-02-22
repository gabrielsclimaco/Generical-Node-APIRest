var User = require('../model/schema/user-schema-exemple')

module.exports = {
  insertExampleUser: (request, response) => {
    var user = new User ({
      name: 'cafe',
      email: 'cafe@cafe.cafe'
    })

    user.save()
  }
}