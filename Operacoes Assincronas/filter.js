var fs = require('fs');
var async = require('async');

var files = ['arquivo1.txt', 'naoexiste.txt', 'arquivo2.txt'];

async.filter(files, function (file, callback) {
    fs.access(file, function (err) {
        callback(null, !err);
    })
}, function (err, results) {
    console.log('existing files', results);
})