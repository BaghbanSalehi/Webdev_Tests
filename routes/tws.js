const express = require('express');
const Router = express.Router();

const testMiddleware = require('../middlewares/test');



Router.get('/', testMiddleware, (req, res) => {
    res.status(200).send("tws2");
})

Router.get('/:twId',(req,res)=>{
    twId = req.params.twId;
    res.status(200).send("GET Tw " + twId);
})

Router.post('/:twId',(req,res)=>{
    console.log(req.body.message);
    res.status(200).send("POST Tws:" + req.body.message);
})

module.exports = Router;