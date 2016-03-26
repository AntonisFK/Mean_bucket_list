var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function () {
  return {
    index: function(req, res){
      User.find({}, function(err, users){
        console.log("index users controller")

        res.json(users);

      })
    },
     current_user: function(req, res) {
     console.log('Users controller get_current_user')
      User.findOne({_id: req.params.id}, function(err, results){
        if(err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
    },
    login: function(req, res){
      console.log(req.body.name)
      User.create({name: req.body.name}, function(err, results){
        if(err){
          console.log(err);
        }else {
          console.log("created")
          res.json(results);
        }
      });
    }
  }
})(); 