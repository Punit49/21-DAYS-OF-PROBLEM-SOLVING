// ? Q1. Count Number of Factors - 
function getFactorsCount(n){
    let factors = [];
    for(let i = 1; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            if(i !== n / i) factors.push(n/i);
            factors.push(i);
        }
    }
    return factors.length;
}

// console.log(getFactorsCount(36));

// ? Q2. Sum of all factors of a number
function sumOfFactors(n){
    let sum = 0;

    for(let i = 1; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            if(i !== (n / i)){
                sum = sum + (n / i);
            }
            sum += i;
        }
    }
    return sum;
}

// console.log(sumOfFactors(36));

// ? Q3. Greatest factor of number other than itself 
function greatestFactor(n){
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) return n / i;
    }
    return 1;
}

// console.log(greatestFactor(97));

// ? Q4. Perfect Number or not - 
function isPerfect(n){
    let sum = 1;

    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            if(i !== (n / i)) sum = sum + (n / i);
            sum += i;
        }
    }

    return sum === n;
}

// console.log(isPerfect(28));

// ? Q5. LCM and HCF of 3 numbers - 
// * Bruteforce Method - 
function LCMandHCF(n1, n2, n3){
    let smallest = n1 < n2? n1 : n2 < n3? n2 : n3;
    let HCF;
    let LCM = smallest;

    for(let i = smallest; i >= 1; i--){
        if(n1 % i == 0 && n2 % i == 0 && n3 % i == 0){
            HCF = i;
            break;
        }
    }

    while(true){
        if(LCM % n1 == 0 && LCM % n2 == 0 && LCM % n3 == 0){
            break;
        }
        LCM++;
    }

    return {HCF, LCM};
}

// console.log(LCMandHCF(36, 48, 68));

// * Euclidean Method - 
function getGCD(n1, n2){
    let divisor = n1 < n2? n1 : n2;
    let dividend = n1 > n2? n1 : n2;

    while(dividend % divisor !== 0){
        const remainder = dividend % divisor;
        dividend = divisor;
        divisor = remainder;
    }

    return divisor;
}

function findLCM(a, b){
    return (a * b) / getGCD(a, b);
}

function getLCMandHCF(n1, n2, n3){
    let HCF = getGCD(getGCD(n1, n2), n3);
    let LCM = findLCM(findLCM(n1, n2), n3);
    return {HCF, LCM};
}

console.log(getLCMandHCF(78, 66, 96));