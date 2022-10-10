const { Schema,model} = require('../connection');

const myschema = new Schema({
  firstName: String,
  lastName:String,
  mobile: Number,
  email: String,
  phone:String,
  message: String,
   createdAt: { type: Date, default: new Date() },
  
});

module.exports=model("contact", myschema);
