// Dependencies
const express = require('express');
const router = express.Router();

//Get page
router.get('/', (req,res) => {
    res.render('orderService', {title:'Order Service'});
  });

module.exports = router;