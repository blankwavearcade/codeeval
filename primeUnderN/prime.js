var fs = require("fs");
var lines = [];
var count;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    var primes = [];
    var prime;
    for(var i = 2; i < +line; i++) { 
      prime = isPrime(i);
      if(prime) { 
        primes.push(prime); 
      }
    }
    console.log(primes.join(','));
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
