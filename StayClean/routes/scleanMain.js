// Dependencies
const express = require('express');
const router = express.Router();

// Get page
router.get('/', (req,res) => {
    res.render('scleanMain', {title:'Stay Clean - Home'});
  });

  module.exports = router;