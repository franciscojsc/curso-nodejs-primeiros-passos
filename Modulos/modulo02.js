             //construtor
var modulo02 = function(initialValue){
    //atributos
    var contador = initialValue;

    //método privado
    var metodo  = function(){
        console.log("teste");
    }

    //métodos publicos
    return{
        contar: function(){
            contador++;
        },
        escrever: function(){
            console.log(contador);
        }
    }
}

module.exports = modulo02;

module.exports.helloWorld = function(){
    console.log("hello world");
};