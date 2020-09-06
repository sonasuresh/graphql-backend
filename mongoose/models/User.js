const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  name: {
    type: String,
  },
  mobile:{
      type:Number
  },
  email:{
    type: String,
  }
})


module.exports = mongoose.model('UserDetails', UserSchema);