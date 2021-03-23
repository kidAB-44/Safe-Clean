// Dependencies
const express = require('express');
const router = express.Router();

//Get Homepage
router.get('scleanAbout', function(req,res,next){
    res.render('scleanAbout', {title:'About'});
    next();
  });

  module.exports = router;