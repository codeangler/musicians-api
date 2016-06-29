var Musician = require('./musican_model')

var musicanController = {
  all: function (req, res) {
    Musician.find({}, function(err, musician){
      if (err){
        console.error("Musican Controller .all error ", err)
      } else {
        res.json(musician)
      }
    })
  },

  create: function(req, res){
    var newMusician = new Musician(req.body)

    newMusician.save(function(error, musician){
      if (error){
        console.log("Musician Controller .create error", error)
      } else{
        res.json(musician)
        console.log( musician, "has been created and added to db")
      }
    })
  },


}

module.exports = musicanController