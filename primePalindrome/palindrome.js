function isPrime(n) {  
 for(var i = 2; i < n; i++) { 
    if(n % i === 0 && i !== n) { 
         return false;
       }
  }
 return n;
}

var largest;
var number;
for(var i = 0; i < 1000; i++) { 
  number = isPrime(i);
  if(number && number === +number.toString().split('').reverse().join('')){ 
    largest = i;
  }
}
console.log(largest);
