// Dependencies
const express = require('express');
const router = express.Router();

//Get page
router.get('/', (req,res) => {
    res.render('homePage', {title:'Stay Clean - Home'});
  });

  module.exports = router;