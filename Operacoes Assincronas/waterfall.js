var async = require('async');
var fs = require('fs');

async.waterfall([
        async.apply(fs.readFile, 'arquivo1.txt', 'utf-8'),
            function (contents, callback) {
                console.log(contents);
                callback(null);
            }
    ],
    function (err) {
        console.log("done");
    })