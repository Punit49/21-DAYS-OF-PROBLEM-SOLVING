// ? Q1.  Find the Prime Factorization (Return as an Array) - 
function getPrimes(n){
    n = Math.floor(n);
    let isPrime = Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for(let i = 2; i * i <= n; i++){
        if(isPrime[i]){
            for(let j = i * i; j <= n; j += i){
                isPrime[j] = false;
            }
        }
    }

    let primes = [];
    for(let i = 0; i <= n; i++){
        if(isPrime[i]) primes.push(i);
    }

    return primes;
}

// *  Question's Main Logic -
function primeFactorization(n){
    let primeFactors = [];
    let value = n;
    let primes = getPrimes(n / 2);

    for(let i = 0; i < primes.length; i++){
        if(value <= 1) break;
        if(value % primes[i] === 0){
            primeFactors.push(primes[i]);
            value = value / primes[i];
            i = -1;
        }
    }

    return primeFactors.length < 1 ? "Prime Number" : primeFactors ;
}

// console.log(primeFactorization(48));

// * Method 2 (without Prime Numbers) - 
function getPrimeFactors(n){
    const primeFactors = [];

    while(n % 2 === 0){
        primeFactors.push(2);
        n = n / 2;
    }

    let factor = 3;

    while(n > 2){
        while(n % factor === 0){
            primeFactors.push(factor);
            n = n / factor;
        }
        factor += 2;
    }

    // if(n > 2) primeFactors.push(n);  
    return primeFactors;
}

// console.log(getPrimeFactors(48));

// * Method 3 (clean and optimized) - 
function primeFactors(n){
    let primeFactors = [];
    let factor = 2;
    let count = {};
    
    while(n >= 2){
        if(n % factor === 0){
            primeFactors.push(factor);
            n /= factor;
        } else {
            factor++;
        }
    }
    
    return primeFactors;
}

console.log(primeFactors(48));

// ? Q2. Factorization in Exponent Form - 
function exponentPrimeFactorization(n){
    let primeFactorsCount = {};
    let factor = 2;

    while(n >= 2){
        if(n % factor === 0){
            primeFactorsCount[factor] = (primeFactorsCount[factor] || 0) + 1;
            n /= factor;
        } else {
            factor ++
        }
    }

    let exponent = "";
    for (const key in primeFactorsCount) {
        exponent += `${key}^${primeFactorsCount[key]} X `;
    }
    return exponent.slice(0, -2);
}

console.log(exponentPrimeFactorization(100));

// ? Q3. Distinct Prime Factor Count - 
function distinctPrimeFactorCount(n){
    let count = 0;

    for(let factor = 2; factor * factor <= n; factor++){
        if(n % factor === 0){
            count++;
            while(n % factor === 0){
                n /= factor;
            }
        }
    }

    if(n > 1) count++;
    return count;
}

// console.log(distinctPrimeFactorCount(48));

// ? Q4. Check if a Number Is a Powerful Number - 
function isPowerfulNumber(n){
    let count = {};
    let factor; 

    for(factor = 2; factor * factor <= n; factor++){
        while(n % factor === 0){
            count[factor] = (count[factor] || 0) + 1;
            n /= factor;
        }
    }

    if(n > 1) count[factor] = (count[factor] || 0) + 1;
    // let Powerful = Object.values(count).every((num) => num >= 2); or

    let Powerful = Math.min(...Object.values(count)) >= 2;
    return {Powerful, count};
}

console.log(isPowerfulNumber(36));