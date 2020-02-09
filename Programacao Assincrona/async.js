var fs = require('fs');

//No modo assíncrono, não trava a aplicação, e executar a função de callback após o processamento
fs.readFile('dados.txt', 'utf8', function(err, contents){
    console.log(contents);
});
console.log('continuar...');