var mongoose=require('mongoose');
mongoose.connect('mongodb+srv://mongodbuser:Pandit@123@cluster0-1caaf.mongodb.net/<dbname>?retryWrites=true&w=majority',{useNewUrlParser: true});
var conn=mongoose.connection;

var uploadSchema = new mongoose.Schema({
    imagename: String,
  });
  
  var uploadModel = mongoose.model('uploadimage',uploadSchema);
  module.exports=uploadModel;