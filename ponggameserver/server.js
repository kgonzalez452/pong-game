var app = require('express')();
var http = require('http').Server(app);
var port = 9005;


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow', 'X-Request-Width, X-HTTP-Method-Override, Content-Type, Accept');
    next();
});

app.get('*', function (req, res) {
    res.send('<h1>Server For Pong Game</h1>');
});

require('./socket')(http);

http.listen(port, function () {
    console.log('listening on *:' + port);
});