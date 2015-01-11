var fs  = require("fs");
var count = 0;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    line = line.split(' ');
    var num = line[0];
    var pat = line[1];
    var len;
    var fir;
    if(pat.indexOf('-') !== -1) { 
       len = pat.split('-')[0].length;
       fir = num.slice(0,len);
       num = +fir - + num.slice(len);
    }else if (pat.indexOf('+') !== -1) {
       len = pat.split('+')[0].length;
       fir = num.slice(0,len);
       num = +fir + +num.slice(len);
    }
    console.log(num);
  }
});


