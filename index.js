const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3005;
const routes = require('./routes/route');
const db = require('./config/db');


app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static('public'));
app.use('/',routes);
















app.listen(port,()=>{

    console.log('server start');
})