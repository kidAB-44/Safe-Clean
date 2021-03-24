// Dependencies
const express = require('express');
const router = express.Router();

//Get page
router.get('/', (req,res) => {
    res.render('registerConductor', {title:'Conductor'});
  });

module.exports = router;