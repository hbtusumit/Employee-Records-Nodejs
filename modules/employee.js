var mongoose=require('mongoose');
mongoose.connect('mongodb+srv://mongodbuser:Pandit@123@cluster0-1caaf.mongodb.net/<dbname>?retryWrites=true&w=majority',
{
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false
}
);

var conn=mongoose.connection;

var employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  etype: String,
  hourlyrate: Number,
  totalHour: Number,
  total: Number,
});

var employeeModel = mongoose.model('Employee',employeeSchema);

module.exports=employeeModel;




