var async = require('async');
var fs = require('fs');

var files = ['arquivo1.txt', 'arquivo2.txt'];

async.map(files, function(file, callback){
    fs.readFile(file, 'utf-8', callback);
}, function(err, results){
    console.log(results);
});