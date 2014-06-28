var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    var words = line.split(" ");
    var word = '';
    console.log(line);
    /*for(var i = 0; i < words.length; i++) {
      if(word.length < words[i].length) {
        word = words[i];
      }
    }
    console.log(word);*/
  }
});
