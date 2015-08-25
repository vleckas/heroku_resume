var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, './public')));
//app.use(express.static(path.join(__dirname, './node_modules')));


var server = app.listen(process.env.PORT || 3000, function(){
    var port = server.address().port;
    console.log('Listening on port: ', port);
});