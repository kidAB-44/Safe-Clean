// Dependencies
const express = require('express');
const router = express.Router();
const passport = require('passport');

// Get page
router.get('/', (req,res) => {
    res.render('scleanLogin', {title:'Stay Clean - Login'});
  });

// Check username and password using passport
router.post('/', passport.authenticate('local', {failureRedirect: '/login'}), (req,res) =>{
  req.session.user = req.user;
  res.redirect('/driver/getDriver');
})
module.exports = router;