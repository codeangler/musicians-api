var apiRouter = require('express').Router()

// Establish controller,   what's this do?
var musicianController = require('./mController') // this accepts the module.export = return object,  which doens't have to match spelling w/n ./mController

apiRouter.route ('/musicians')
  .get(musicianController.all)
  .post(musicianController.create)

apiRouter.route('/musicians/:id')
  .get(musicianController.single)
  .put(musicianController.update)
  .delete(musicianController.destroy)
// Export DIY middleware to server.js
module.exports = apiRouter;