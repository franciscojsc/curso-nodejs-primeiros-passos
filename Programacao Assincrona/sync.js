var fs = require('fs');

//No modo sicrono o programa, só irá continuar após a execução
var contents = fs.readFileSync('dados.txt', 'utf8');
console.log(contents);