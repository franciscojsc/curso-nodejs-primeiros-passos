//console.log("Dentro do módulo");

var contador = 0;
//exponnhe uma interface com a função contar
module.exports.contar = function(){
    contador++;
    console.log(contador);
};