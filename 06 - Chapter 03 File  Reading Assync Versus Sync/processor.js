var http = require('http');
var fs = require('fs');

var asyncRead = require('./async_read.js');
var syncRead = require('./sync_read.js');
var file = "./node.zip";

var stream = fs.createWriteStream(file);

var download = "file:///E:/excerto-livro-ca-gp-windows7.pdf";
//http://nodejs.org/dist/v0.10.12/node-v0.10.12.tar.gz
http.get(download, function(res) {
    console.log("Downloading Node.js");
    res.on('data', function(data){
        stream.write(data);
    });
    res.on('end', function(){
        stream.end() ;
        console.log("Download has been finished!");
        asyncRead(file);
        syncRead(file);
    });
});