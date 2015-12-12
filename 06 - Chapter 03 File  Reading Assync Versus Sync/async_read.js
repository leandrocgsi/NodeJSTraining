var fs = require('fs');

var asyncRead = function(file) {
    console.log("Doing assync read");
    var begin = new Date().getTime();
    fs.readFile(file);
    var end = new Date().getTime();
    console.log("Assync block: "+(end - begin)+ " ms");
};

module.exports = asyncRead;