var express = require('Express')
var path = require('path');
var app = express();

app.use(express.static('public'));

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Listening on port: ', port);
});