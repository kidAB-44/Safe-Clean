const mongoose = require('mongoose');
// const passportLocalMongoose = require('passport-local-mongoose');

const registrationSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: 'Please enter first name.'
    },
    lname: String,
    username: {
        type: String,
        unique: true,
        required: 'Please enter user name.' 
    }
  });

// registrationSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('UserReg', registrationSchema);