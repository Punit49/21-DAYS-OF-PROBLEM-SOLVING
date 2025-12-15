// ? Q1. Find the Product of All Distinct Prime Factors.
function productOfDistinctPF(n){
    let product = 1;
    let factor;
    for(factor = 2; factor * factor <= n; factor++){
        if(n % factor === 0) product *= factor;
        while(n % factor == 0){
            n /= factor;
        }
    }
    if(n > 1) product *= n;
    return product;
}

// console.log(productOfDistinctPF(150));

// ? Q2. Check if a Number Is a Square-Free Number -
function isSquareFreeNumber(n){
    let count = {};
    let factor;

    for(factor = 2; factor * factor <= n; factor++){
        while(n % factor === 0){
            count[factor] = (count[factor] || 0) + 1;
            n /= factor;
        }
    }

    if(n > 1)  count[factor] = (count[factor] || 0) + 1;
    return Math.max(...Object.values(count)) <= 1;
}

// console.log(isSquareFreeNumber(78));

// * Optimized Code -
function isSquareFree(n){
    for(let i = 2; i * i <= n; i++){
        if(n % (i * i) === 0) return false;
    }
    return true;
}

// console.log(isSquareFree(78));              

// ? Q3. Check if a Number Is a Smith Number - 
function primeOrNot(n){
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) return false;
    }
    return true;
}

function digitsSum(n){
    let digits = 0;
    while(n > 0){
        digits += n % 10 ;
        n = Math.floor(n / 10);
    }
    return digits;
}

function primeFactorSum(n){
    let sum = 0;
    for(let factor = 2; factor * factor <= n; factor++){
        while(n % factor === 0){
            sum += digitsSum(factor);
            n /= factor;
        }
    }
    if(n > 1) sum += digitsSum(n)
    return sum;
}

function isSmithNumber(n){
    if(primeOrNot(n)) return false;
    return digitsSum(n) === primeFactorSum(n);
}

// console.log(isSmithNumber(121));

// ? Q4. Check if a Number Is an Ugly Number -
function isUglyNumber(n){
    if(n <= 0) return false;
    let primeFactors = [];

    for(let factor = 2; factor * factor <= n; factor++){
        while(n % factor === 0){
            primeFactors.push(factor);
            n /= factor;
        }
    }

    if(n > 1) primeFactors.push(n);
    return Math.max(...primeFactors) <= 5;
}

// console.log(isUglyNumber(81));

// * Industry Standard way -
function isUgly(n){
    if(n <= 0) return false;

    for (const factor of [2, 3, 5]) {
        while(n % factor === 0){
            n /= factor; 
        }
    }
    return n === 1;
}

// console.log(isUgly(81));

// ? Q5. Check if a Number Is a Kaprekar Number - 
function isKaprekarNumber(n) {
    if(n <= 0) return false;
    let squared = (n ** 2).toString();
    let d = n.toString().length;

    let right = Number(squared.slice(-d));
    let left = Number(squared.slice(0, squared.length - d));
    return n === (right + left);
}

// console.log(isKaprekarNumber(297));

// * Optimized Code -
function isKaprekar(n){
    if(n <= 0) return false; 
    let square = (n * n).toString();
    let len = square.length;

    for(let i = 1; i < len; i++){
        let left = Number(square.slice(0, i));
        let right = Number(square.slice(i));

        if(right !== 0 && left + right === n) return true;
    }
    return false;
}

// console.log(isKaprekar(297));

// ? Q6. Check if a Number Is a Happy Number - 
function squaredDigitSum(n){
    let digits = 0;
    while(n > 0){
        let num = n % 10;
        digits += num ** 2;
        n = Math.floor(n / 10);
    }
    return digits;
}

function isHappyNumber(n){
    let digitCount = {};
    let squareSum = 0;
    while(!(digitCount[squareSum])){
        digitCount[squareSum] = squareSum;
        squareSum = squaredDigitSum(n);
        if(squareSum == 1) return true;
        n = squareSum;
    }
    return false;
}

// console.log(isHappyNumber(19));

// * Using Floyd's Cycle Detection Algorithm -
function isHappy(n) {
    let slow = n;
    let fast = n;

    do{
        slow = squaredDigitSum(slow);
        fast = squaredDigitSum(squaredDigitSum(fast));
    } while(slow !== fast)

    return slow === 1;
}

// console.log(isHappy(18));

// ? Q7. Number Base Conversion (Binary to decimal and vice versa) -
function binaryToDecimal(n){
    let decimalExponent = 1;
    let sum = 0;

    for(let i = n.length - 1; i >= 0; i--){
        if(Number(n[i]) === 1) sum += decimalExponent; 
        decimalExponent *= 2;
    }
    return `(${sum})10`;
} 

function decimalToBinary(n){
    let quotient = n;
    let remainder = [];

    while(quotient / 2 !== 0){
        remainder.unshift(quotient % 2);
        quotient = Math.floor(quotient / 2);
    }

    return remainder;
}

function decimalBinaryConvetor(num, from, to){
    if(from == 2 && to == 10) return binaryToDecimal(num);
    else if(from == 10 && to == 2) return decimalToBinary(num);
}

// console.log(decimalBinaryConvetor("1001001001111011111", 2, 10));

// * Optimized Solution - 
function binaryToDecimalO(n){
    let sum = 0;
    let power = 0;

    for(let i = n.length - 1; i >= 0; i--){
        sum += (n[i] - '0') * (2 ** power);
        power++
    }

    return sum;
}

function decimalToBinaryO(n){
    let result = "";

    while(n > 0){
        result = (n % 2) + result;
        n = Math.floor(n / 2);
    }
    return result;
}

// console.log(decimalToBinaryO(145));

// ? Q8. Swap Variable without using third variable - 
function swapWithoutThirdVariable(a, b){
    console.log(a, b);
    a = a + b;
    b = a - b;
    a = a - b;
    return {a, b}
}

console.log(swapWithoutThirdVariable(12, 32));

// * Js Way -
function swapNoThirdVar(a, b){
    [a, b] = [b, a];
    return {a, b};
}

console.log(swapNoThirdVar(12, 32));

