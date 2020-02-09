var fs = require('fs');
var Q = require('q');

function readArquivo1() {
    console.log("Arquivo 1");
    var deferred = Q.defer();
    fs.readFile('arquivo1.txt', 'utf8', function (err, arquivo1) {
        deferred.resolve(arquivo1); // o retorno da promessa
    });
    return deferred.promise; // retorna uma promessa que será retornado algum
}

function readArquivo2() {
    console.log("Arquivo 2");
    var deferred = Q.defer();
    fs.readFile('arquivo2.txt', 'utf8', function (err, arquivo2) {
        deferred.resolve(arquivo2);
    });
    return deferred.promise;
}

function writeArquivo3(conteudo) {
    var deferred = Q.defer();
    fs.writeFile('arquivo3.txt', conteudo, function (err) {
        deferred.resolve(true);
    });
    return deferred.promise;
}

/* 
    O readArquivo1 retorna uma promessa,
    o then - significa que quando cumprir a
    promessa execute a função
*/

readArquivo1()
    .then(function (arquivo1) {
        console.log(arquivo1)
    })

var conteudo = "";
readArquivo1()
    .then(function (arquivo1) {
        conteudo += arquivo1;
        return readArquivo2();
    })
    .then(function (arquivo2) {
        conteudo += arquivo2;
        return writeArquivo3(conteudo);
    })
    .then(function () {
        console.log('tudo certo');
    });

// Outro exemplo
readArquivo1()
    .then(readArquivo2)
    .then(writeArquivo3)
    .then(function (result) {
        console.log("Deu tudo certo", result);
    });