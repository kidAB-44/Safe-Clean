// Dependencies
const express = require('express');
const multer = require('multer');
const router = express.Router();
const ConductorReg = require('../models/ConductorReg')

//Get page
router.get('/', (req,res) => {
    res.render('registerConductor', {title:'Conductor'});
  });

// Image upload
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'public/fileUpload');
  },
  filename: (req, file, cb) => {
      cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage })

router.post('/', upload.single('fileUpload'), async (req, res) => {
  try {
      const newConductor = new ConductorReg(req.body);
      newConductor.fileUpload = req.file.path;
      await newConductor.save();
      res.send('Thank you for your registration!');
  } catch(err) {
      console.log(err);
      res.send('Sorry! Something went wrong.');
    };
})

module.exports = router;