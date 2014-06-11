var fs  = require("fs");
var morse = {
  ".-":"A",
  "-...":"B",
  "-.-.":"C",
  "-..":"D",
  ".":"E",
  "--.":"G" ,
  "....":"H",
  "..":"I",
  ".---":"J",
  "-.-":"K",
  ".-..":"L",
  "--":"M",
  "-.":"N",
  "---":"O",
  ".--.":"P",
  "--.-":"Q",
  ".-.":"R",
  "...":"S",
  "-":"T",
  "..-":"U",
  "...-":"V" ,
  ".--":"W",
  "-..-":"X",
  "-.--":"Y" ,
  "--..":"Z",
  "-----":"0" ,
  "..----": "1",
  "..---":"2" ,
  "...--": "3" ,
  "....-":"4" ,
  ".....": "5",
  "-...." : "6",
  "--..." :"7" , 
  "---..": "8" , 
  "----." : "9" 
};
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    line = line.trim();
    var lines = line.split(" ");
    var len = lines.length;
    var linez = '';
    for(var i = 0; i < len; i++) {
      linez += morse[lines[i]];
    }
    linez = linez.replace(/undefined/gi," ");
    console.log(linez);
  }
});

