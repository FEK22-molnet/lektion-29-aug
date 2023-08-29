// Skriv ett node.js-program för att kolla en requests cookies
// sätt upp din server
let http = require('http');
let server = http.createServer(function (request, response) {
    // kolla om användaren har tidigare cookies
    let cookies = request.headers.cookie;
    if (!cookies) {
        let cookieName = "session";
        let cookieValue = "abc123";
        let expiration = new Date();
        // sätt utgångsdatum för cookien till en dag
        expiration.setDate(expiration.getDate() + 1);
        let cookieText = cookieName + '=' + cookieValue + ';expires=' + expiration.toUTCString() + ';';
        response.setHeader('Set-Cookie', cookieText);
        response.writeHead(302, {
            'Location': '/'
        });
        return response.end();
    }
    cookies.split(';').forEach(function (cookie) {
        let match = cookie.match(/(.*?)=(.*)$/);
        cookies[match[1].trim()] = (match[2] || '').trim();
    });
    response.end("Cookie:" + cookies.toString());
}).listen(8080);