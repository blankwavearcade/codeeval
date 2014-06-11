var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    var inputs = line.split(" ");
    var objs = [];
    for(var i = 1; i <= inputs[inputs.length - 1]; i++){
      if(i % inputs[0] === 0 && i % inputs[1] === 0) {
        objs.push("FB");
      }else if(i % inputs[0] === 0) {
        objs.push("F");
      }else if(i % inputs[1] === 0) {
        objs.push("B");
      }else {
        objs.push(i);
      }
    }
    console.log(objs.join(" "));
  }
});
