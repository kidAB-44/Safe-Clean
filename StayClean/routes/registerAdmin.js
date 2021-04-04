// Dependencies
const express = require('express');
const router = express.Router();
const AdminReg = require('../models/AdminReg')

// Get page
router.get('/', (req,res) => {
    res.render('registerAdmin', {title:'Stay Clean - Register'});
  });

// Get registration details from the database and render as a table list
router.post('/', async(req, res) => {
  try {
      const adminUser = new AdminReg(req.body);
      await AdminReg.register(adminUser, req.body.password, (err) => {
          if (err)
            { 
             throw err
            }
          res.redirect('/login')
      })
  }
  catch (err) {
      res.status(400).send('Sorry! Something went wrong.')
      console.log(err)
  }
})

module.exports = router;