// Dependencies
const express = require('express');
const multer = require('multer');
const router = express.Router();
const DriverReg = require('../models/DriverReg')

//Get page
router.get('/', (req,res) => {
    res.render('registerDriver', {title:'Driver'});
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
        const newDriver = new DriverReg(req.body);
        newDriver.fileUpload = req.file.path;
        await newDriver.save();
        res.send('Thank you for your registration!'); 
    } catch(err) {
        console.log(err);
        res.send('Sorry! Something went wrong.');
        };
})

module.exports = router;