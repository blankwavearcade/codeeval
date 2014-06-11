var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {       
    var lines = line.split(" | ");
    var first = lines[0].split(" ");
    var second = lines[1].split(" ");
    var fin = [];
    for(var i = 0; i < first.length; i++){
      fin.push(first[i] * second[i]);
    }

    console.log(fin.join(" "));
  }
});


