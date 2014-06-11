var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {       
    if(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gi.test(line)){
      console.log('true');
    }else{
      console.log('false');
    }
  }
});


