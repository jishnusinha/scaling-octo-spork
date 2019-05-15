const express = require('express')
const mongoose = require('mongoose')


//config import
const db = require('./config/database')


mongoose.connect('mongodb://authuser:1authuser@ds041546.mlab.com:41546/auth')
.then(()=> console.log('coonected to mongodb'))
.catch(err => console.error('cound not connect to mongodb',err))
//mongoose.Promise = global.Promise
const bodyparser = require('body-parser')

const port = 3000

const api = require('./routes/api')
const app = express()

app.use(bodyparser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
  });
  app.use('/api',api)


app.get('/', function(req,res){
    res.send('hello from server')
})

app.listen(port,function(){
    console.log('server running on localhost:'+port)
}) 