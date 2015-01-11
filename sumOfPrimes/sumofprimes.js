function isPrime(n) { 
 for(var i = 2; i < n; i++) { 
    if(n % i === 0 && i !== n) { 
         return false;
       }
  }
 return n;
}

var prime;
var count = 0;
var number = 0;
var i = 0;
while(count < 1001){ 
  prime = isPrime(i);
  if(prime) {
    number += prime;
    count++;
  }
  i++;
}
console.log(number-1);
