var express = require('express');
var path = require('path');
var compression = require('compression');

var app = express();

// pass in MIDDLEWARE
app.use(compression());

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', function (require, respond){
    respond.sendFile(path.join(__dirname, 'dist/index.html'));
});

var port = process.env.port || 3018;
app.listen(port, function () {
    console.log('Production Express server running at:'+ port);
});