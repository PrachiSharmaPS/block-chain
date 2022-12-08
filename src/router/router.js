const express = require('express');
const router = express.Router();
const coinController = require('../controller/controller');


//======================Routes===============================//
router.get('/getCoin',coinController.getCryptoCurr)

//==================Route to check the http requests===================//
router.all("/*",function(req,res){
    res.status(404).send({msg:"invalid http request"})
})


module.exports = router;
