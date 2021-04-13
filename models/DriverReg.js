// Require Mongoose
const mongoose = require('mongoose');

//  Create schema for data
const driverSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: 'Please enter the first name.'
  },
  lname: {
    type: String,
    required: 'Please enter the last name.'
  },
  dob: {
    type: String,
  },
  gender: String,
  n_id: {
    type: String,
    unique: String,
    required: 'Please enter the National ID Number.'
  },
  license: {
    type: String,
    required: 'Please enter the vehicle registration number.'
  },
  residence: {
    type: String,
    required: 'Please enter the residence details.'
  },
  dperf: String,
  ddetails: String,
  fileUpload: String,
});

// Export Mongoose model
module.exports = mongoose.model('DriverReg', driverSchema);