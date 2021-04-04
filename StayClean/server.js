// Dependencies
const express = require('express');
const main = require('./routes/scleanMain'); // Routes
const about = require('./routes/scleanAbout');
const login = require('./routes/scleanLogin');
const regAdmin = require('./routes/registerAdmin');
const regDriver = require('./routes/registerDriver');
const regConductor = require('./routes/registerConductor');
const regCustomer = require('./routes/registerCustomer');
const AdminReg = require('./models/AdminReg')

require('dotenv').config();
const mongoose = require('mongoose');
const passport = require('passport');

// Required to monitor authentication at every user session
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});

// Initiate Expres app
const app = express();

// Database connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false
  });
  
mongoose.connection
    .on('open', () => {
        console.log('Mongoose connection open');
})
    .on('error', (err) => {
        console.log(`Connection error: ${err.message}`);
});

// Configurations
app.set('view engine', 'pug');
app.set('views', './views');

// Middleware
app.use(express.urlencoded({extended:true}));
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

passport.use(AdminReg.createStrategy());
passport.serializeUser(AdminReg.serializeUser());
passport.deserializeUser(AdminReg.deserializeUser());

// Middleware for serving static files (css,js,images)
app.use(express.static('public'));
app.use('/public/fileUpload', express.static(__dirname + '/public/fileUpload'));

app.use('/main', main);
app.use('/about', about);
app.use('/login', login);
app.use('/registration', regAdmin);
app.use('/driver', regDriver);
app.use('/conductor', regConductor);
app.use('/customer', regCustomer);

// Failed routes
app.get('*', (req, res)=> {
    res.send('The route specified does not exist')
})

// Server call
app.listen(3000, () => {
    console.log('Listening on port 3000.');
})