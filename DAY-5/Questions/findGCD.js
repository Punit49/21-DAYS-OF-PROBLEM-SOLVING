// ? Q. Find the HCF (Highest Common Factor) or GCD of Two Numbers.
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

// * Euclidean Algorithm (subtraction version, less optimized than modulo)- 
function euclideanAlgorithm2(x, y){
    if(x === 0) return y;
    else if(y === 0) return x;

    while(x !== y){
        if(x > y) x = x - y;
        else y = y - x;
    }

    return x;
}

// * Bruteforce Method - 
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

// * Bruteforce Method - 
function getHCF(n1, n2){
    let smallest = n1 < n2 ? n1 : n2;
    
    for(let i = smallest; i >= 1; i--){
        if(n1 % i == 0 && n2 % i == 0){
            return i;
        }
    }
}