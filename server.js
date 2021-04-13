// Key dependencies
const express = require('express');

// Routes
const home = require('./routes/homeRoutes');
const about = require('./routes/aboutRoutes');
const login = require('./routes/loginRoutes');
const regUser = require('./routes/regUserRoutes');
const regDriver = require('./routes/regDriverRoutes');
const regConductor = require('./routes/regConductorRoutes');
const orderService = require('./routes/orderRoutes');
const UserReg = require('./models/UserReg')

// Other dependencies
require('dotenv').config();
const mongoose = require('mongoose');

// Initiate Expres app
const app = express();

// Database connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
mongoose.connection
    .on('open', () => {
        console.log('Mongoose connection open');
})
    .on('error', (err) => {
        console.log(`Connection error: ${err.message}`);
});

// Address mongoose deprecation warnings
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

// Configurations
app.set('view engine', 'pug');
app.set('views', './views');

// Middleware - general
app.use(express.urlencoded({extended:true}));
// app.use(expressSession);
// app.use(passport.initialize());
// app.use(passport.session());

// Passport strategy
// passport.use(UserReg.createStrategy());
// passport.serializeUser(UserReg.serializeUser());
// passport.deserializeUser(UserReg.deserializeUser());

// Middleware for serving static files (css,js,images)
app.use(express.static('public'));
app.use('/public/fileUpload', express.static(__dirname + '/public/fileUpload'));

// Endpoints associated with routes
app.use('/home', home);
app.use('/about', about);
app.use('/login', login);
app.use('/registration', regUser);
app.use('/driver', regDriver);
app.use('/conductor', regConductor);
app.use('/order', orderService);

// Failed routes
app.get('*', (req, res)=> {
    res.send('The route specified does not exist')
})

// Server call
app.listen(3000, () => {
    console.log('Listening on port 3000.');
})