const appRoutes = require('./app_routes');
module.exports = function(app, db) {
 appRoutes(app, db);
 // ToDo
 module.exports = function(app, db) {
  app.post('/codes', (req, res) => {
    res.send('Hello')
  });
 }
}
