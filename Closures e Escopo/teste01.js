/*
var a = 10;
function inc() {
    a++;
    var b = 11;
}

inc();
console.log(a, b);
*/

//Self-Invoking Function - função que executar automaticamente
(function () {
    var a = 1;
    function inc() {
        a++;
    }
    inc();
    console.log(a);
})();

//Simulando o Singleton
var conta = (function(){
    var contador = 0;

    return function(){ contador++, console.log(contador);};
})();

conta();
conta();
conta();
conta();
conta();
conta();

//Singleton com retorno de objeto com funções dentro 
var conta2 = (function(){
    var contador = 0;

    return{
        contar: function(){
            contador++;
        },
        out: function(){
            console.log(contador);
        }
    }
    
})();

conta2.contar();
conta2.out();
conta2.contar();
conta2.out();

