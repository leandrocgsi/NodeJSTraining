var http = require('http');

var responseRequest = function(request, response){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Hail bitches</h1>");
    response.end();
}

var server = http.createServer(responseRequest);

var servidorLigou = function() {
    console.log('Hail bitches server has been started!');
}

server.listen(3000);