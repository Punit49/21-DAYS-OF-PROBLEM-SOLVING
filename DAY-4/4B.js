// ? Q1. Splitt Number into digits - 
let n = 1234891011;

function getDigits(n) {
    let arr = [];

    while(n !== 0){
        arr.unshift(n % 10);
        n = Math.floor(n / 10);
    }
    return arr;
}

// console.log(getDigits(n));

// ? Q2. Reverse a number - 
let n2 = 12345;

function reverseDigit(n){
    let digits = 0;

    while(n !== 0){
        let last = n % 10;
        digits = digits * 10 + last;
        n = Math.floor(n / 10);
    }

    return digits;
}

// console.log(reverseDigit(n2));

// ? Q3. Remove the Decimal Point Mathematically. 
let n3 = 12345.3445;

function removeDecimal(n) {
    while(n % 1 !== 0){
        n *= 10;
    }
    return Number(n.toFixed(10));
}

function removeDecimal2(n) {
    while(Math.floor(n) !== n){
        n *= 10;
    }
    return Number(n.toFixed(10));
}

function removeDecimal3(n) {
    while(!Number.isInteger(n)){
        n *= 10;
    }
    return Number(n.toFixed(10));
}

// console.log(removeDecimal2(n3));

// ? Q4. Separate Whole and Fractional Parts of a Number.
function wholeAndFraction(n){
    let whole = Number((n - (n % 1)).toFixed(10));
    let fraction = Number((n - whole).toFixed(10));
    return {whole, fraction};
}

// console.log(wholeAndFraction(12456.3456789));

// ? Q5. Generate a Decimal Number from Whole and Fractional Digits
function generateWhole(arr){
    let whole = 0;
    for(let i = 0; i < arr.length; i++){
        whole = 10 * whole + arr[i];
    }
    return {whole};
}

function generateFraction(arr){
    let whole = 0;
    let divide = 1;
    for(let i = 0; i < arr.length; i++){
        whole = 10 * whole + arr[i];
        divide *= 10;
    }
    return {Decimal: whole / divide};
}

// console.log(generateWhole([1, 2, 3, 4, 5]))
// console.log(generateFraction([6,7,8,9]))

// * Without Using Second Function - Improving Code reusability - 
// let arr2 = [6,7,8,9]
// let result = generateWhole(arr2) / (10 ** arr2.length);
// console.log(result);

// ? Q6. Check if a Number is a Palindrome.
function isPalindrome(num){
    let reverse = reverseDigit(num);
    if(reverse === num) return true;
    return false;
}

// console.log(isPalindrome(123321));

// ? Q7. Check if a Number is an Armstrong Number (also called a Narcissistic Number).
function isArmstrong(n){
    let nums = getDigits(n);
    let size = nums.length;
    let sum = 0;
    nums.forEach((num, i) => {
        sum += num ** size;
    });
    return n === sum;
}

console.log(isArmstrong(370));