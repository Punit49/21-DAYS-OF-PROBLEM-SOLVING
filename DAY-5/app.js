// ? Q1. Factors - 
let num1 = 24;

function getFactors(n){
    let arr = [1];
    for(let i = 2; i <= n/2; i++){
        if(n % i == 0) arr.push(i)
    }
    arr.push(n);
    return arr;
}

// console.log(getFactors(36));

function getFactors2(n){
    let arr = [];

    for(let i = 1; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            if(i !== (n / i)) arr.splice(arr.length / 2, 0, (n / i))
            arr.splice(arr.length / 2, 0, i)
        }
    }
    return arr;
}

// console.log(getFactors2(10));

// ? Q2. Multiples -
let num2 = 8;

function getMultiples(n, limit){
    let mulArr = []
    
    for(let i = n; i <= limit; i = i + n){
        mulArr.push(i);
    }

    return mulArr;
}

// console.log(getMultiples(num2, 40));

// ? Q3. HCF

let n1 = 12;
let n2 = 16;

// * Bruteforce Method - 
function getHCF(n1, n2){
    let smallest = n1 < n2 ? n1 : n2;
    
    for(let i = smallest; i >= 1; i--){
        if(n1 % i == 0 && n2 % i == 0){
            return i;
        }
    }
}

// console.log(getHCF(n1, n2));

// * Bruteforce Method 2 - 
function HCF(n1, n2){
    let factors = [];

    for(let i = 1; i <= Math.sqrt(n1); i++){
        if(n1 % i == 0){
            if(i !==( n1 / i)) factors.splice(factors.length / 2, 0, (n1 / i)) 
            factors.splice(factors.length / 2, 0, i);
        }
    }
    
    return factors.reverse().find(f => n2 % f === 0);
}

// console.log(HCF(12, 18))

// * Euclidean algorithm - 
function GCD(n1, n2){
    let divisor = n1 < n2? n1 : n2;
    let dividend = n1 > n2? n1 : n2;

    while(dividend % divisor !== 0){
        let remainder = dividend % divisor;
        dividend = divisor;
        divisor = remainder; 
    }

    return divisor;
}

// console.log(GCD(36, 48));

// ? Q4. LCM - 
let a = 12;
let b = 19;

function getLCM(n1, n2){
    let HCF = GCD(n1, n2);
    return (n1 * n2) / HCF;
}
console.log(getLCM(a, b));

// * Bruteforce Method - 
function findLCM(n1, n2){
    let lcm = n1 > n2 ? n1 : n2;

    while(true){
        if(lcm % n1 === 0 && lcm % n2 === 0){
            return lcm;
        }
        lcm++
    }
}

console.log(findLCM(a, b));