var http = require('http');
var url = require('url');
var fs = require('fs');

var getHTMLFile = function(name){
    if(!name || name == "/") return __dirname + "/" + "article.html";
    var file = __dirname + name + ".html";
    if(fs.existsSync(file)) return file;
    return __dirname + "/" + "error.html";
};

var server = http.createServer(function(request, response){
    var pathname = url.parse(request.url).pathname;
    var file = getHTMLFile(pathname);
    fs.readFile(file, function(err, html) {
        response.writeHeader(200, {'Content-Type': 'text/html'});
        response.end(html);
    });
});

server.listen(3000, function(){
  console.log('HTTP Server Has Been Started');
});