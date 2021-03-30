// Dependencies
const express = require('express');
const router = express.Router();

//Get page
router.get('/', (req,res) => {
    res.render('orderSewage', {title:'Order Sewage'});
  });

module.exports = router;