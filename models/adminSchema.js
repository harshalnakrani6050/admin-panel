const mongoose = require('mongoose');


const adminSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
});

const adminModel = mongoose.model('admins',adminSchema);

module.exports = adminModel;