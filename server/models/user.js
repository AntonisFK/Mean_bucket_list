var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  name: String, 
  created_at:{ type: Date, defualt: Date.now},
  //has many buckeltlist 
  buckeltlists: [{type: Schema.Types.ObjectId, ref:'BucketList'}]
});

mongoose.model("User", UserSchema);