// Dependencies
const express = require('express');
const router = express.Router();

//Get page
router.get('/', (req,res) => {
    res.render('orderWaste', {title:'Waste'});
  });

module.exports = router;