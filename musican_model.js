var mongoose = require('mongoose')

var musicianSchema = mongoose.Schema( {
  name: String,
  nickname: String,
  dob: Date,
  albums: [{
    title: String,
    release_year: Date,
    other_artists: [String]
  }],
  instruments: [String]
})

var MusicianDB = mongoose.model('musician', musicianSchema)

module.exports = MusicianDB