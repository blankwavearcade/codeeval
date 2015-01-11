var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    line = line.split(',');
    var count = 0;
    for(var i = +line[0];i <= +line[1];i++){
      if(isPrime(i)){
        ++count; 
      } 
    }
    console.log(count);
  }
});


function isPrime(n) { 
 for(var i = 2; i < n; i++) { 
    if(n % i === 0 && i !== n) { 
         return false;
       }
  }
 return n;
}
   
