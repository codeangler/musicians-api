var MusicianDB = require('./musican_model')

var musicianController = {
  all: function (req, res) {
    MusicianDB.find({}, function(err, musician){
      if (err){
        console.error("Musican Controller .all error ", err)
      } else {
        res.json(musician)
      }
    })
  },

  create: function(req, res){
    var newMusician = new MusicianDB(req.body)

    newMusician.save(function(error, musician){
      if (error){
        console.log("Musician Controller .create error", error)
      } else{
        res.json(musician)
        console.log( musician, "has been created and added to db")
      }
    })
  },

  single : function(req, res){
    var id = req.params.id;

    MusicianDB.findById(id, function(error, musician){
      if (error){
        console.error('get(musicianController.single) : ', error)
      } else{
        res.json(musician)
      }
    })
  },

  update : function(req, res){
    var id = req.params.id;

    MusicianDB.findByIdAndUpdate(id, req.body, {new :true}, function(err, updateMusician){
      if(err){
        console.error(err)
      } else{
        res.json(updateMusician)
      }
    })
  },

  destroy : function(req, res){
    var id = req.params.id;
    MusicianDB.findByIdAndRemove(id, function(err){
      if(err){
        console.error("destoy w/n controller", err)
      } else{
        res.json({
          success: true,
          message: "Remove item from db by id " + id,
        })
      }
    })
  },
}

module.exports = musicianController