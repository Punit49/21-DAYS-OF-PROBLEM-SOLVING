// ? Q1. Prime Or Not -
// * Bruteforce Method -
function isPrime(n){
    if(n < 1) return false;
    for(let i =  2; i <= n / 2; i++){
        if(n % i == 0) return false;
    }
    return true;
}

// console.log(isPrime(19));

// * Using factors
function primeOrNot(n){
    if(n < 1) return false;
    let factorsCount = 0;
    for(let i = 1; i <= Math.sqrt(n); i++){
        if(n % i == 0){
            if(i !== n / i) factorsCount++;
            factorsCount++;
        }
    }
    return factorsCount === 2;
}

// console.log(primeOrNot(23));

// ? Q2. Co-prime or not (their HCF is one) - 
function isCoPrime(n1, n2){
    let divisor = n1 < n2 ? n1 : n2;
    let dividend = n1 > n2 ? n1 : n2;

    while(dividend % divisor !== 0){
        const remainder = dividend % divisor;
        dividend = divisor;
        divisor = remainder;
    }

    return divisor == 1;
}

// console.log(isCoPrime(4, 5));

// ? Q3. Print Fibonacci Series up to N Terms -
function fibonacci(n){
    let fibonacci = [0, 1];
    let previous = 0;

    for(let i = 1; i <= n - 2; i++){
        fibonacci.push(previous + fibonacci[i]);
        previous = fibonacci[i];
    }

    return fibonacci;
}

// console.log(fibonacci(20));

// * Without Array - 
function fibonacciUptoN(n){
    let previous = 0;
    let current = 1;
    let result = "0, 1, ";

    for(let i = 1; i <= n - 2; i++){
        let temp = current;
        current = previous + current;
        previous = temp;
        result += `${current}, `;
    }

    return result;
}

// console.log(fibonacciUptoN(20));

// ? Q4. Print nth Fibonacci term -
function nthFibonacciTerm(n){
    let fibonacci = [0, 1];
    let previous = 0;

    for(let i = 1; i <= n - 2; i++){
        fibonacci.push(previous + fibonacci[i]);
        previous = fibonacci[i];
    }

    console.log(fibonacci);
    return fibonacci.pop();
}

// console.log(nthFibonacciTerm(8));

// * Without Array -
function getNthFibonacci(n){
    let result = "0, 1";
    let pre = 0;
    let cur = 1;

    for(let i = 1; i <= n - 2; i++){
        let temp = cur;
        cur = pre + cur;
        pre = temp;
        result += `, ${cur}`;
    }

    return result.split(",").at(-1);
}

// console.log(getNthFibonacci(9));

// * Using binet's algorithm - 
function binetAlgorithm(n){
    let root = Math.sqrt(5); 
    let phi = (1 + root) / 2; 
    let psi = (1 - root) / 2;

    let result = (Math.pow(phi, n) - Math.pow(psi, n)) / root;

    return Math.floor(result);
}

// console.log(binetAlgorithm(8));

// ? Q5. Check if a Number Belongs to the Fibonacci Series.
function isFibonacci(n){
    if(n == 0) return true;
    let pre = 0;
    let fibonacci = [0, 1];

    for(let i = 1; i <= n; i++){
        const next = pre + fibonacci[i];
        if(next === n) return true;
        if(next > n) break;
        fibonacci.push(next);
        pre = fibonacci[i];
    }

    return false;
}

// console.log(isFibonacci(21));

// * Using Formula - 
function fibonacciOrNot(n){
    let f1 = Math.sqrt(5 * (n**2) + 4);
    let f2 = Math.sqrt(5 * (n**2) - 4);
    if(Number.isInteger(f1) || Number.isInteger(f2)){
        return true;
    }
    return false;
}

console.log(fibonacciOrNot(21)); 