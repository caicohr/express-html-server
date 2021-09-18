// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/htmlFolder'));


app.get('/monster', function(req, res) {
    res.render('../htmlFolder/pages/monster');
});

app.get('/', function(req, res) {
    res.render('../htmlFolder/pages/index');
});
app.get('/armor', function(req, res) {
    res.render('../htmlFolder/pages/armor');
});

//app.get('/', function(req, res) {
//    res.render('../htmlFolder/stylesheet');
//});

app.get('/style', function(req, res) {
    res.render('../htmlFolder/stylesheet/style');
});

app.get('/homepic.jpg', function(req, res) {
    res.render('../htmlFolder/images/homepic');
});

app.get('/mhwbackground.jpg', function(req, res) {
    res.render('../htmlFolder/images/mhwbackground');
});

app.listen(8080);
console.log('localhost:8080 server is now working!');