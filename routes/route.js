const express = require('express');
const routes = express();
const controller = require('../controllers/mainController');







routes.get('/', controller.defaultController);
routes.get('/signin', controller.signInController);
routes.get('/signup', controller.signUpController);
routes.get('/forms',controller.forms);


routes.post('/registerAdmin',controller.registerAdmin);
routes.post('/loginadmin',controller.loginAdmin);

routes.get('/logoutAdmin',controller.logoutAdmin);
routes.post('/addUser',controller.addUser);




module.exports=routes;