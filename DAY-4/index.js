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
    console.log(num % 10);
    numArr.unshift(num % 10);
    num = Math.floor(num / 10);
}

console.log(numArr);