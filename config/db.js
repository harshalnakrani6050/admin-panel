const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/adminpanel').then(()=>{
    console.log("mongodb connect...");
}).catch((err)=>{
    console.log('mongodb not connect...',err);
});

module.exports = mongoose;