const adminModel = require('../models/adminSchema');
const userModel = require('../models/userSchema');



const defaultController = (req,res) =>{
    try{
       
        let {SessionId} = req.cookies;

        if (SessionId) {
            res.render('index');
        } else {
            res.redirect('/signin');
        } 

    }catch(err){
        console.log('error');
    }
}

const signInController = (req,res) =>{
    try{

        res.render('signin');

    }catch(err){
        console.log('signin error',err);
    }
}

const signUpController = (req,res) =>{
    try{

        res.render('signup');

    }catch(err){
        console.log('signup error',err);
    }
}

const registerAdmin =async (req,res) =>{
    
    const {username,email,password} = req.body;

   try{
        const admin = new adminModel({
            username,
            email,
            password
        });

        await admin.save();
        console.log('admin create....');
        res.redirect('/signin');
   }catch(err){
        console.log('err',err);
        res.redirect('/signup');
   }
}

const loginAdmin =async (req,res) =>{


    let {email,password} = req.body;

    const admin =await adminModel.find({email});
    console.log('admin ',admin);    

    if(admin.length > 0){
        if (admin[0].password == password) {
            console.log('auth complete');
            res.cookie('SessionId',admin[0].id);
            res.redirect('/');
        } else {
            console.log('auth not complete');
            res.redirect('/signin');
        }
    }else{
        res.redirect('/signup');
    }
}

const logoutAdmin = (req,res) =>{
    
    res.clearCookie('SessionId');
    res.redirect('/signin');
}

const forms = (req,res) =>{
    try{

        res.render('form');

    }catch(err){
        console.log('signin error',err);
    }
}


const addUser =async (req,res) =>{
    
    const {username,dec,title,id} = req.body;

   try{
        const user = new adminModel({
           username,
           dec,
           title,
           id

        });

        await user.save();
        console.log('aadd user create....');
        res.redirect('/addUser');
   }catch(err){
        console.log('err',err);
       
   }
}

module.exports = {defaultController,signInController,signUpController,registerAdmin,loginAdmin,logoutAdmin,addUser,forms};