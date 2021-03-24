// Dependencies
const express = require('express');
const multer = require('multer');
const router = express.Router();

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

router.post('/', upload.single('fileUpload'), (req, res) => {
    try {
        res.send(req.file);
    } catch (err) {
        res.send(400);
    }
})

module.exports = router;