var S = require('string');
var txt = S('olá').replaceAll("o", "---- O").toString();
console.log(txt);