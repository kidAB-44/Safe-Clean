// Dependencies
const express = require('express');
const router = express.Router();

//Get Homepage
router.get('staycleanMain', function(req,res,next){
    res.render('staycleanMain', {title:'Home'});
    next();
  });

  module.exports = router;