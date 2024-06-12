const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username:String,
    dec:String,
    title:String,
    id:String,
   
});

const userModel = mongoose.model('users',userSchema);

module.exports = userModel;