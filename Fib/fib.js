var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {       
    console.log(fib(line));
  }
});

function fib(n) { 
  return (n == 0 || n == 1 ? n : fib(n - 1) + fib(n - 2));
}


