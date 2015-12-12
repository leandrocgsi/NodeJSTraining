var fs = require('fs');

var syncRead = function(file) {
    console.log("Doing sync read");
    var begin = new Date().getTime();
    fs.readFileSync(file);
    var end = new Date().getTime();
    console.log("Sync block: "+(end - begin)+ " ms");
}
module.exports = syncRead;