var fs = require('fs');

fs.readFile('arquivo1.txt', 'utf8', function (err, arquivo1) {
    fs.readFile('arquivo2.txt', 'utf8', function (err, arquivo2) {
        fs.readFile('arquivo3.txt', arquivo1 + "\n" + arquivo2, function (err) {
            console.log("tudo certo");
        });
    });
});