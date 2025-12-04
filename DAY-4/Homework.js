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

console.log(largestSmallest(6485));
