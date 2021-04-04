// Require Mongoose
const mongoose = require('mongoose');

//  Create schema for data
const driverSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: 'Please enter the first name.'
  },
  lastname: {
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
  vreg: {
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