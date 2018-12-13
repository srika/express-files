var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));

//Defining routes here
app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
})

app.post('/submit-data', function(req, res){
    var name = req.body.firstName + ' ' + req.body.lastName;
    res.send('Welcome ' + name + '!!');
})

var server = app.listen(5000, function(){
    console.log('Node server is running at port 5000');
})