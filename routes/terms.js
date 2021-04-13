// Dependencies
const express = require('express');
const router = express.Router();

//Get page
router.get('/', (req,res) => {
    res.render('terms', {title:'Terms & Conditions'});
  });

module.exports = router;