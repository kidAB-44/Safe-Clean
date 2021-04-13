// Dependencies
const express = require('express');
const router = express.Router();

// Get page
router.get('/', (req,res) => {
    res.render('aboutUs', {title:'About Stay Clean'});
  });

  module.exports = router;