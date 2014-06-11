var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {       
    line = line.replace(/\r/gm, ""); // For Windows.
    console.log(line);

    var linez = line.split("");
    var len = linez.length;
    for(var i = 0; i < len; i++) {
      if(!/[a-z]/i.test(linez[i])){
        continue;
      }
      if(linez[i].toUpperCase() === linez[i]) {
        linez[i] = linez[i].toLowerCase();
      } else if(linez[i].toLowerCase() === linez[i]) {
        linez[i] = linez[i].toUpperCase();
      }
    }
    console.log(linez.join(""));
  }
});
