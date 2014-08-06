var express = require('express'),
    http = require('http'),
    mongojs = require('mongojs');

var app = express()
    .use(express.bodyParser())
    .use(express.static('client'));

app.get('/users', function (req, res) {
    //var dburl = 'localhost/mongoapp';
    var dburl = 'mongodb://charliebriones:bakasaru@widmore.mongohq.com:10000/CharlieDb';
    var collection = ['users'];
    var db = mongojs.connect(dburl, collection);

    db.users.find().toArray(function (err, results) {
        res.json(results);
    });
});

app.get('/test', function (req, res) {
    res.json({"test":"testing"});
});

app.get('/*', function (req, res) {
    res.json(404, {status:'not founds'});
});

http.createServer(app).listen(3000, function () {
    console.log("Server ready at http://localhost:3000");
});