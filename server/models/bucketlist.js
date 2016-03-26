var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

var BucketListSchema = new mongoose.Schema({
  _user: {type: Schema.ObjectId, ref:'User'},
  title: String, 
  description: String, 
  partner: {type: Schema.Types.ObjectId, ref:'User'},
  finished: Boolean
})

mongoose.model('BucketList', BucketListSchema)