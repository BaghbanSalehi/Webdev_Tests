require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const twsRouter = require('./routes/tws');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/tws',twsRouter);

app.get('/',function(req,res){
res.send("koskesh");
});

// app.get('/tws',function(req,res){
//     res.send("koskesh2");
// })

app.use((req,res,next)=> {
    const error = new Error('Not Found !');
    error.status = 404;
    next(error);
});

app.listen(process.env.PORT,function(){
    console.log("server is running at localhost:3000")
});