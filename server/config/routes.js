var users = require('./../controllers/users.js')
var bucketlists = require('./../controllers/bucketlists.js')



module.exports = function(app){
  app.post('/login', function(req, res) {
    console.log("hit create login");
    users.login(req, res);
  })

  app.get('/users', function(req, res) {
    console.log("routes get /users");
    users.index(req, res);
  })

  app.get('/users/:id', function(req, res){
    console.log("get /user/:id")
    users.current_user(req, res);
  })

  app.post('/bucketlists', function(req, res){
    console.log("routes post /bucketlists");
    bucketlists.create(req, res);
  })


  app.get('/bucketlists/:id', function(req, res){
    console.log("routes get /bucketlists");
    bucketlists.index(req, res);
  })

  app.post('/bucketlists/:id', function(req, res){
    console.log("Post /bucketlists/:id")
    bucketlists.update(req, res);
  })
}
