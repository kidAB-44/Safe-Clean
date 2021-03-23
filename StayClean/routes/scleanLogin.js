// Dependencies
const express = require('express');
const multer = require('multer');
const router = express.Router();

//Get Homepage
router.get('scleanLogin', function(req,res,next){
    res.render('scleanLogin', {title:'Login'});
    next();
  });

  module.exports = router;