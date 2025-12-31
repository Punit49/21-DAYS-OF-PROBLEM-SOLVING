// ? Part A

const arr = [2, 4, 6, 5, 9, 7, 6];

// function digitToSum(arr) {
//     let sum = 0;
//     for(let i = arr.length - 1; i >= 0; i--){
//         let value = 10**(arr.length - 1);
//         console.log(`${arr[i]} X ${value}`);
//         sum += arr[i] * value;
//         console.log(arr[i] * value);
//         arr.pop();
//     }
//     return sum;
// }

// function digitToSum(arr) {
//     let sum = 0;
//     let mul = 1;
//     for(let i = 0; i < arr.length; i++) {
//         console.log(`${arr[i]} X ${mul}`);
//         sum += arr[i] * mul;
//         mul *= 10;
//     }
//     return sum;
// }

function digitToSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        console.log(`${arr[i]} X ${10**i}`);
        sum += arr[i] * 10 ** i;
    }
    return sum;
}

function digitToSum(arr) {
    return arr.reduce((acc, cur, i) => acc + (cur * 10 ** i), 0);
}

// console.log(digitToSum([...arr]));

// ? Part B
// ? Q1. Split Numbers - 
let num = 123456789;
let numArr = [];

while(num > 0){
    numArr.unshift(num % 10);
    num = Math.floor(num / 10);
}

console.log("Splitted Numbers Are -", numArr);

// ? Q2. Remove Decimal Mathematically - n % 1 gives fraction part
let num2 = 12.345000000000001;
function removeDecimal0(n) {
    while(n % 1 !== 0){
        n = Number((n * 10).toFixed(10));
    }
    return Math.floor(n);
}

console.log(removeDecimal0(num2)); 

// ? Q3. Separate Whole and Fractional Parts of a Number 
let num3 = 789.95565;

function wholeFractional(n) {
    // let whole = n - n % 1;
    let whole = Math.floor(n);
    let fraction = Number((n - whole).toFixed(10));
    return {whole, fraction};
}

// console.log(wholeFractional(num3));

// ? 4. Count Whole and Fractional Digits Separately 
let num4 = 12345545.345667891;

const wholeCount = (n) => {
    let count = 0;
    while(n !== 0){
        count++;
        n = Math.floor(n / 10);
    }
    return count;
}

function fractionCount(n) {
  while (n % 1 !== 0) {
    n = Number(n * 10).toFixed(10);
  }
  return wholeCount(n);
}

// let {whole, fraction} = wholeFractional(num4);

// console.log(wholeCount(whole));
// console.log(fractionCount(fraction));

// ? 5. Generate a Decimal Number from Whole and Fractional Digits.
let full = [1, 2, 3, 4, 8, 8, 9, 5];
let decimal = [4, 2, 9, 8, 6, 7, 3, 5];

function generateWhole(arr) {
    let whole = 0;
    for(let i = 0; i < arr.length; i++){
        whole = 10 * whole + arr[i];
    }
    return {whole};
}

function generateDecimal(arr) {
    let divide = 1;
    let whole = 0;

    for(let i = 0; i < arr.length; i++){
        whole = 10 * whole + arr[i];
        divide *= 10;
    }

    return {Decimal: whole / divide};
}

console.log(generateWhole(full));
console.log(generateDecimal(decimal));
