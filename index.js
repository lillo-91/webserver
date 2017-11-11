var express = require('express');
var app = new express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
   res.sendFile(__dirname + '/index.html'); 
});

app.get('/test', function(req, res){
   res.send('hello'); 
});

app.post('/getMyPost', function(req, res){
   console.log(req.body);
    res.send('ciao');
});

app.listen(3000);