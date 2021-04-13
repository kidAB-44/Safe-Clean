// Dependencies
const express = require('express');
const router = express.Router();
const UserReg = require('../models/UserReg')

// Get page
router.get('/', (req,res) => {
    res.render('registerUser', {title:'Stay Clean - Register'});
  });

// Get registration details from the database and render as a table list
router.post('/', async(req, res) => {
  try {
      const newUser = new UserReg(req.body);
      await UserReg.register(newUser, req.body.password, (err) => {
          if (err)
            { 
             throw err
            }
          res.redirect('/login')
      })
  }
  catch (err) {
      res.status(400).send('Sorry! Something went wrong with user registration.')
      console.log(err)
  }
})

module.exports = router;