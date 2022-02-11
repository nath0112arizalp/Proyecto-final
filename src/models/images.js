const mongoose = require('mongoose');
const {Schema, model,connect } = mongoose;

connect('mongodb+srv://Natati:X7mBroeKdDjKd9N5@cluster0.mxq19.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(db => console.log('DB conectada'))
.catch(err => console.error(err))


var schema = new Schema({
   
 
   filename:String
  
  });
  
  
  module.exports = model("imagen", schema);
  