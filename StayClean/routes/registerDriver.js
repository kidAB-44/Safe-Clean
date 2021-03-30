// Dependencies
const express = require('express');
const multer = require('multer');
const router = express.Router();
const DriverReg = require('../models/DriverReg')

// Get page
router.get('/', (req,res) => {
    res.render('registerDriver', {title:'Register Driver'});
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

// Save data for new registered driver (and save file path for photo) - data is from registerDriver.pug
router.post('/', upload.single('fileUpload'), async (req, res) => {
    try {
        const newDriver = new DriverReg(req.body);
        newDriver.fileUpload = req.file.path;
        await newDriver.save();
        res.redirect('/driver/getDriver');
    } catch(err) {
        console.log(err);
        res.send('Sorry! Something went wrong.');
        };
})

// Get driver registration details from the database and render as a table list
router.get('/getDriver', async (req,res) => {
    try {
        let driverDetails = await DriverReg.find();
        // Search for driver on the basis of ...e.g. gender
        if (req.query.gender) {
            driverDetails = await DriverReg.find({ gender: req.query.gender })
        }
        res.render('driverList', {drivers: driverDetails, title:'Driver List'});
    } catch(err) {
        console.log(err)
        res.send('Unable to return driver details!');
    };
  })

// Get unique driver ID from the database and use to show and update driver details
router.get('/update/:id', async (req, res) => {
    try {
        const updateDriver = await DriverReg.findOne({ _id: req.params.id })
        res.render('updateDriver', { driver: updateDriver })
    } catch (err) {
        res.status(400).send("Unable to find item in the database!");
    }
})

// Route to save updated driver details using unique ID and then return to new registration page
router.post('/update', async (req, res) => {
    try {
        await DriverReg.findOneAndUpdate({_id:req.query.id}, req.body)
        res.redirect('/driver/getDriver');
    } catch (err) {
        console.log(err)
        res.status(404).send("Unable to update item in the database!");
    }
})

// Delete driver details using unique database ID
router.post('/delete', async (req, res) => {
    try {
        await DriverReg.deleteOne({ _id: req.body.id })
        res.redirect('back')
    } catch (err) {
        res.status(400).send("Unable to delete item in the database!");
    }
})

module.exports = router;