// Require Mongoose
const mongoose = require('mongoose');

//  Create schema for data
const conductorSchema = new mongoose.Schema({
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
  n_id: {
    type: String,
    unique: true,
    required: 'Please enter the National ID Number.'
  },
  residence: {
    type: String,
    required: 'Please enter the residence details.'
  },
  fileUpload: String,
});

// Export Mongoose model
module.exports = mongoose.model('ConductorReg', conductorSchema);