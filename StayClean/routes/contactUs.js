// Dependencies
const express = require('express');
const router = express.Router();

//Get page
router.get('/', (req,res) => {
    res.render('contactUs', {title:'Contact'});
  });

module.exports = router;