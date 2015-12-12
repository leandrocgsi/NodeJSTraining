var fs = require('fs');

for (var i = 1; i <= 5; i++) {
    var file = "async-txt" + i + ".txt";
    fs.writeFile(file, "Hail bitches!", function(err, out) {
        console.log(out);
    });
}