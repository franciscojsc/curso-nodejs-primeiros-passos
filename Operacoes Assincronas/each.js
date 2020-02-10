var fs = require('fs');
var async = require('async');

var files = ['arquivo1.txt', 'arquivo2.txt','arquivo1.txt', 'arquivo2.txt','arquivo1.txt', 'arquivo2.txt','arquivo1.txt', 'arquivo2.txt'];

//para cada arquivos, será executado em paralelo
async.each(files, function(file, callback){
    fs.readFile(file, 'utf-8', function(err, contents){
        console.log(contents);
        callback(null);//foi colocado null no lugar do err, se o err for null indicar que não houve erro
    })
});

//para cada arquivos, será executado em sequencia
async.eachSeries(files, function(file, callback){
    fs.readFile(file, 'utf-8', function(err, contents){
        console.log(contents);
        callback(null);//foi colocado null no lugar do err, para indicar que não houve erro
    })
});