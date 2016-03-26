var mongoose = require('mongoose');
var BucketList = mongoose.model('BucketList');
var User = mongoose.model('User')

module.exports = (function() {
  return {
    index: function(req, res){
      BucketList.find({_user: req.params.id})
      .populate('partner')
      .populate('_user')
      .exec(function(err, bucketlist){
        res.json(bucketlist)
        console.log(err)
      })
    },
    create: function(req, res){
      console.log(req.body)
      console.log("create controller BucketList")
      BucketList.create({_user: req.body._user, partner: req.body.partner._id, title: req.body.title, description: req.body.description, finished: false }, function(err, results){
        if(err){
          console.log(err);
        }
        else{
          res.json(results);
        }
      })
    },
    update: function(req, res){
      BucketList.update({_id: req.params.id}, {finished: true}, function(err, bucketlist){
        res.json(bucketlist); 
      })
    }
  }
})(); 