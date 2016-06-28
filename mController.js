var Musican = require('./musican_model')

var musicanController = {
  all: function (req, res) {
    Musican.find({}, function(err, musicians){
      if (err){
        console.error("Musican Controller .all error ", err)
      } else {
        res.json(musicians)
      }
    })
  },
}

module.exports = musicanController