var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    var lines = line.split("");
    var stack = [];
    var lineLen = lines.length
    for(var i = 0; i < lineLen; i++) {
      stack.push(lines[i]);
    }
    if(lines[0] === '(' && lines[lineLen-1] === ')'){
      console.log("True");
    }else{
      console.log("False");
    }
  }
});


