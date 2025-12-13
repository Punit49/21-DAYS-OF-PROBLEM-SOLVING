// ? Q1. Print All Prime Numbers up to N
function primeOrNot(n){
    if(n < 2) return false;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) return false;
    }

    return true;
}

function nPrimeNumbers(n){
    let primes = [];
    for(let i = 2; i <= n; i++){
        if(primeOrNot(i)) primes.push(i);
    }
    return primes;
}

// console.log(nPrimeNumbers(30))

// * Using Sieve of Eratosthenes Algorithm-
function seiveOfEratosthenes(n){
    let isPrime = Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for(let i = 2; i * i <= n; i++){
        if(isPrime[i]){
            for(let j = i * i; j <= n; j += i){
                isPrime[j] = false;
            }
        }
    }

    let primes = []
    for(let i = 0; i <= n; i++){
        if(isPrime[i]) primes.push(i);
    }

    return primes;
}

// console.log(seiveOfEratosthenes(20))

// ? Q2. Sum of All Prime Numbers till N - 
function sumOfPrime(n){
    let primes = seiveOfEratosthenes(n);
    return primes.reduce((acc, cur) => acc + cur);
}

// console.log(sumOfPrime(35));

// ? Q3. Check if Two Numbers are Twin Primes - 
function isTwinPrimes(a, b){
    let isPrime = primeOrNot(a) && primeOrNot(b);
    if(isPrime && (Math.abs(a - b) == 2)) return true;
    return false;
}

// console.log(isTwinPrimes(3, 5));

// ? Q4. Print All Fibonacci Numbers up to a Given Limit - 
function fibonacciTillNth(n){
    let fibonacci = [0, 1];
    while(true){
        let next = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        if(next > n) break;
        fibonacci.push(next);
    }
    return fibonacci;
}

// console.log(fibonacciTillNth(100));

// ? Q5. Generate Fibonacci Numbers Within a Range
function fibonacciRange(n1, n2){
    let fibonacci = [0, 1];  
    while(true){
        let next = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        if(next > n2) break;
        fibonacci.push(next);
    }
    return fibonacci.filter((num) => num >= n1); 
}

// console.log(fibonacciRange(10, 100));

// * Optimzed Code -
function getFibonacciRange(n1, n2){
    let a = 0, b = 1; 
    let result = [];

    while(a <= n2){
        if(a >= n1) result.push(a);
        let next = a + b;
        a = b;
        b = next;
    }

    return result;
}

// console.log(getFibonacciRange(10, 100));

// ? Q6. Find the Sum of Even Fibonacci Numbers up to N Terms - 
function sumOfEvenFibbonacci(n){
    let a = 0, b = 1, sum = 0;

    for(let i = 1; i <= n; i++) {
        let next = a + b;
        a = b;
        b = next;
        if(a % 2 == 0) sum += a;
    }

    return sum;
}

// console.log(sumOfEvenFibbonacci(20));

// ? Q7. Check if the Sum of Two Consecutive Fibonacci Numbers is Prime -
function isConsecutive(n1, n2){
    let a = 0, b = 1, result = []; 

    while(a <= Math.max(n1, n2)){
        result.push(a);
        let next = a + b;
        a = b;
        b = next;
    }

    return result[result.length - 2] === Math.min(n1, n2);
} 

function sumOfPrimeFibonacci(n1, n2){
    let isPrime = primeOrNot(n1 + n2);
    if(isPrime && isConsecutive(n1, n2)) return true;
    return false;
}

// console.log(sumOfPrimeFibonacci(55, 34));

// * Optimed Solution - 
function checkPrimeFibonacciSum(n1, n2){
    let isConsecutive = fibonacciOrNot(n1 + n2);
    let isPrime = primeOrNot(n1 + n2);
    if(isPrime && isConsecutive) return true;
    return false;
}

// console.log(checkPrimeFibonacciSum(55, 34))

// ? Q8. Print First N Prime Fibonacci Numbers - 
function primeFibonacci(n){
    let a = 0, b = 1, primes = [];

    while(primes.length < n){
        if(primeOrNot(a)) primes.push(a);
        let next = a + b;
        a = b;
        b = next;
    }
    return primes;
}

// console.log(primeFibonacci(10));

