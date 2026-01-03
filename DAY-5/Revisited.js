// ? Q. Print All Factors of a Number - 
function getFactors(n){
    let factors = [];

    for(let i = 1; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            if(i !== (n / i)) factors.splice(factors.length / 2, 0, (n / i));
            factors.splice(factors.length / 2, 0, i);
        }
    }

    return factors;
}

// ? Q. Print All Multiples of a Number up to N - 
function getMultiples(n, limit){
    let multiples = [];

    for(let i = n; i <= limit; i += n){
        multiples.push(i);
    }

    return multiples;
}

// ? Q. Find the HCF (Highest Common Factor) or GCD of Two Numbers - 
function getHCF(x, y){
    let factors = [];

    for(let i = 1; i <= Math.sqrt(x); i++){
        if(x % i === 0) {
            if(i !== (x / i)) factors.splice(factors.length / 2, 0, (x / i));
            factors.splice(factors.length / 2, 0, i);
        }
    }

    return factors.reverse().find(num => y % num === 0);
}

// * Euclidean Algorithm (modulo version, optimized)- 
function euclideanAlgorithm(x, y){
    let dividend = x > y ? x : y;
    let divisor = x < y ? x : y;
    
    while(dividend % divisor !== 0){
        let remainder = dividend % divisor;
        dividend = divisor;
        divisor = remainder;
    }
    return divisor;
}

// * Euclidean Algorithm (subtraction version, less optimized)- 
function euclideanAlgorithm2(x, y){
    if(x === 0) return y;
    else if(y === 0) return x;

    while(x !== y){
        if(x > y) x = x - y;
        else y = y - x;
    }

    return x;
}

// ? Q. Find the LCM (Least Common Multiple) of Two Numbers.
function getLCM(a, b){
    let max = a > b ? a : b;
    let limit = a * b; 

    while(max <= limit){
        if(max % a === 0 && max % b === 0){
            return max;
        }
        max++;
    }
}

function getLCM2(a, b){
    let gcd = euclideanAlgorithm(a, b);
    return (a * b) / gcd;
}

// ? Q. Count the Total Number of Factors of a Number.
function factorsCount(n){
    let count = 0;
    for(let i = 1; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            count += (i === (n / i) ? 1 : 2);
        }
    }
    return count;
}

// ? Q. Sum of All Factors of a Number.
function getFactorsSum(n){
    let sum = 0;
    for(let i = 1; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            let pair = n / i;
            if(i !== pair) sum += pair;
            sum += i;
        }
    }
    return sum;
}

// ? Q. Find the Greatest Factor of a Number (Other Than Itself) - 
function greatestFactor(n){
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) return n / i;
    }
    return 1;
}

// ? Q. Check if a Number is a Perfect Number.
function isPerfect(n){
    if(n <= 1) return false;
    let sum = 1;

    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            let pair = (n / i);
            if(i !== pair) sum += pair;
            sum += i;
        }
    }

    return sum === n;
}

// ? Q. Find the HCF and LCM of Three Numbers.
function gcd(x, y){
    while(y !== 0){
        let r = x % y;
        x = y;
        y = r;
    }
    return x;
}

function lcm(x, y){
    return (x * y) / gcd(x, y);
}

function LCMandHCF(a, b, c){
    let HCF = gcd(gcd(a, b), c);
    let LCM = lcm(lcm(a, b), c);
    return {LCM, HCF};
}