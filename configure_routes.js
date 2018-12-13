var express = require('express');

var app = express();

//Defining routes here
app.get('/', function(req, res){
    res.send('Hello World');
})

app.get('/user', function(req, res){
    res.send('User Dashboard');
})

app.post('/user', function(req, res){
    res.send('<h1>This is Post Request</h1>');
})

app.put('/user', function(req, res){
    res.send('<h1>This is Put Request</h1>');
})

app.delete('/user', function(req, res){
    res.send('<h1>This is Delete Request</h1>');
})

var server = app.listen(5000, function(){
    console.log('Node server is running at port 5000');
})