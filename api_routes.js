var apiRouter = require('express').Router()

// Establish controller,   what's this do?
var musicianController = require('./mController')

apiRouter.route ('/musicians')
  .get(musicianController.all)

// Export DIY middleware to server.js
module.exports = apiRouter;