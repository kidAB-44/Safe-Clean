// Dependencies
const express = require('express');

// Instantiation
const app = express();

// Configurations
app.set('view engine', 'pug');
app.set('views', './views');

// Middleware
app.use(express.urlencoded({extended:true}));

// Serve static files from Stay Clean Project
app.use(express.static('public'));

app.use((req, res, next) =>{
    console.log('A new request was received at ' + Date.now());
    next();
})

// Routes
const home = require('./routes/staycleanMain');
const about = require('./routes/scleanAbout');
const login = require('./routes/scleanLogin');

app.use('/staycleanMain', home);
app.use('/scleanAbout', about);
app.use('/scleanLogin', login);

// Failed routes
app.get('*', (req, res)=> {
    res.send('The route specified doesnt exist')
})

// Server call
app.listen(3000, () => {
    console.log('Listening on port 3000.');
})

////////////// Old Code
// // Home page routes
// app.get('/staycleanMain', (req, res) => {
//     // res.render('index');
//     res.render('staycleanMain', {title:'Home'});
// });

// app.post('/staycleanMain', (req, res) => {
//     console.log(req.body)
//     res.send("Successful data capture");
// });

// // Customer registration routes
// app.get('/registerCustomer', (req, res) => {
//     res.put('registerCustomer', {title:'Register Customer'});
// });

// app.post('/registerCustomer', (req, res) => {
//     console.log(req.body)
//     res.send("Successful data capture");
// });

// // Driver registration routes
// app.get('/registerDriver', (req, res) => {
//     res.render('registerDriver', {title:'Register Driver'});
// });

// app.post('/registerDriver', (req, res) => {
//     console.log(req.body)
//     res.send("Successful data capture");
// });

// // Conductor registration routes
// app.get('/registerConductor', (req, res) => {
//     res.render('registerConductor', {title:'Register Conductor'});
// });

// app.post('/registerConductor', (req, res) => {
//     console.log(req.body)
//     res.send("Successful data capture");
// });

// // Failed routes
// app.get('*', (req, res)=> {
//     res.send('The route specified doesnt exist')
// })

// // Server call
// app.listen(3000, () => {
//     console.log('Listening on port 3000.');
// })