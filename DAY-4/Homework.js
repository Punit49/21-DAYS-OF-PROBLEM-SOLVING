// ? Q1. Find the Sum of Digits
function sumOfDigits(n){
    let sum = 0;
    while(n !== 0){
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

// * Using Reduce
function sumOfDigits2(n){
    let digits = [];
    while(n !== 0){
        digits.push(n % 10);
        n = Math.floor(n / 10);
    }
    return digits.reduce((acc, cur) => acc + cur);;
}

// console.log(sumOfDigits2(4567));

// ? Q2. Find the Average of Digits.
function averageOfDigits(n){
    let count = 0;
    let sum = 0;

    while(n !== 0){
        count++;
        sum += Number(n % 10);
        n = Math.floor(n / 10);
    }

    return {Average: sum / count};
}

// console.log(averageOfDigits(123456));

// ? Q3. Find the Largest and Smallest Digit in a Number.
function largestSmallest(n){
    let largest = 0;
    let smallest = Number(n % 10);
    while(n !== 0){
        let lastDigit = Number(n % 10);
        n = Math.floor(n / 10);
        if(lastDigit > largest) largest = lastDigit;
        if(lastDigit < smallest) smallest = lastDigit;
    }
    return {largest, smallest};
}

// console.log(largestSmallest(6485));

// ? Q4. Check if a Number is a Strong Number
function getFactorial(n){
    let factorial = 1;
    if(x === 0 || x === 1) return 1;
    for(let i = 2; i <=n; i++){
        factorial *= i;
    }
    return factorial;
}

function isStrong(n){
    let factorialSum = 0;
    let originalNum = n;

    while(n !== 0){
        let lastDigit = Number(n % 10);
        factorialSum += getFactorial(lastDigit);
        n = Math.floor(n / 10);
    }
    return factorialSum === originalNum;
}

// console.log(isStrong(40585));

// ? Q5. Check if a Number is an Automorphic Number.
function isAutomorphic(n){
    let originalNum = n;
    let count = 0;

    while(n !== 0){
        count++;
        n = Math.floor(n / 10);
    }

    let squareLastDigit = ((originalNum ** 2) % (10 ** count));
    return squareLastDigit === originalNum;
} 

// console.log(isAutomorphic(376));

// ? Q6. Find the Frequency of Each Digit. 
function getFrequency(n){
    let arrObj = [];

    while(n !== 0){
        let lastDigit = Number(n % 10);
        let obj = arrObj.find((element) => element.digit === lastDigit);
        if(obj){
            obj.count++;
        } else {
            arrObj.push({digit: lastDigit, count: 1});
        }
        n = Math.floor(n / 10);
    }
    return arrObj;
}

// console.log(getFrequency(1122334455));

// * Better Version with less time complexity
function CountFrequency(n){
    let frequency = Array(10).fill(0);

    while(n !== 0){
        let lastDigit = Number(n % 10);
        frequency[lastDigit]++;
        n = Math.floor(n / 10);
    }

    return frequency.map((count, digit) => ({digit, count}))
            .filter((item) => (item.count > 0));
}

// console.log(CountFrequency(1223));

// ? Q7. Check if a Number is a Harshad Number
function isHarshad(n) {
    let originalNum = n;
    let sum = 0;

    while(n !== 0){
        let lastDigit = Number(n % 10);
        sum += lastDigit;
        n = Math.floor(n / 10);
    }
    return originalNum % sum === 0;
}

console.log(isHarshad(1728));