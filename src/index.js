const express = require('express');
const route = require('./router/router');
const mongoose = require('mongoose');
const app = express();
 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

 
mongoose.connect("mongodb+srv://PrachiSharma:RJwCCypSuiwhrFaW@newproject.ufw9pum.mongodb.net/newproject" ,{
    UseNewUrlParser: true
})
.then( () => console.log("mongoDb is connected"))
.catch((err) => console.log(err.message))
 
app.use('/' , route)
 
app.listen(3001, function(){
    console.log("express app running on port "+3001)
})