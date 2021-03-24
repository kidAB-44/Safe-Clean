// Dependencies
const express = require('express');
const router = express.Router();

//Get page
router.get('/', (req,res) => {
    res.render('orderSewage', {title:'Sewage'});
  });

module.exports = router;