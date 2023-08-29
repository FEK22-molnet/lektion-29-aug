// 1.8: Skriv ett node.js-program för att göra EXTERNA HTTP-anrop.
let http = require('http');
http.request({
    host: 'www.google.com',
    method: 'GET',
    path: '/'
}, function(response) {
    response.setEncoding('utf8');
    response.on("readable", function() {
        console.log(response.read());
    });
}).end();