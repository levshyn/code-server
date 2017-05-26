// server.js
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
app.use(bodyParser.urlencoded({extended: true}));
require('./app/routes')(app, {});
app.listen(port, () => {
 console.log('We are live on ' + port + ' port');
});
module.exports = function(app, db) {
 app.post('/codes', (req, res) => {
  // codes
  console.log('Post request');
  res.send('Hello')
 });
};
app.get('/sample', function(req,res) {
 console.log('get request');
 res.send('this is a sample!');
});
