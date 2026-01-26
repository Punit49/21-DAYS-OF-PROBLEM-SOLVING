// ? Q1. 
// * 1
let nums = [199, 190, 99];
let max;
const maxDiv = document.querySelector("#max");

if(nums[0] > nums[1] && nums[0] > nums[2]) max = nums[0];
else if(nums[1] > nums[2]) max = nums[1];
else max = nums[2];
maxDiv.textContent = max;

// * 2
// max = Math.max(...nums);
// maxDiv.textContent = max;

// * 3 using reduce
// console.log(nums.reduce((acc, cur) => acc > cur ? acc : cur));

// * Largest of any count of number
// max = nums[0];
// for(let i = 0; i < nums.length; i++){
//     if(nums[i] > nums[i + 1]){
//         max = nums[i];
//     }
// }
// maxDiv.textContent = max;

// * Using function
const maxOfThree = (a, b, c) => {
    if(a > b && a > c) return {a}
    else if(b > c) return {b};
    else return {c};
}

// console.log(maxOfThree(1000, 1000, 39));

// ? 2. 
const posNegOrZero = document.querySelector("#posNegOrZero");

// * 1. 
const checkPosNeg = (num) => {
    if(num >= 0){
        if(num == 0) return "Zero";
        else return "Positive"
    }
    return "Negative";
}

// * 2. 
const mathSign = (n) => {
    if(Math.sign(n) == 1) return "Positive"
    else if(Math.sign(n) == -1) return "Negative"
    else return "Zero"
} 

// * 3. Clean
const cleanSign = (n) => {
    return n > 0 ? "Positive" : n < 0 ? "Negative" : "Zero";
}

// posNegOrZero.textContent = checkPosNeg(0);
// posNegOrZero.textContent = mathSign(-50);
posNegOrZero.textContent = cleanSign(78);

// ? 3. 
// let units = 230;
// const bill = document.querySelector("#bill");

// const calBill = (units) => {
//     if(units){
//         let total;
//         if(units > 0 && units <= 100){
//             total = units * 5;
//         } else if(units <= 200){
//             total = (100 * 5) + (units - 100) * 7;
//         } else if(units <= 300) {
//             total = (100 * 5) + (100 * 7) + (units - 200) * 10;
//         }
//         else {
//             total = (100 * 5) + (100 * 7) + (100 * 10) + (units - 300) * 12;
//         }
//         return total;
//     }
// }

// bill.textContent = `₹${calBill(units)}`;

// * Scalable
let units = 250;
const bill = document.querySelector("#bill");
let priceSlabs = [
    {limit: 100, rate: 5},
    {limit: 200, rate: 7}, 
    {limit: 300, rate: 10},
    {limit: Infinity, rate: 12}
]

const calBill = (units) => {
    let total = 0;
    let remaining = units;
    let previousLimit = 0;

    for (const slab of priceSlabs) {
        let slabUnits = Math.min(remaining, slab.limit - previousLimit);
        total += slabUnits * slab.rate;
        remaining -= slabUnits;
        previousLimit = slab.limit;
        if(remaining <= 0) break;
    }   

    return total;
}

bill.textContent = `₹${calBill(units)}`;

// ? 4. 
let char = "u";
const vowelCheck = document.querySelector("#vowelCheck");
let vowels = ["a", "e", "i", "o", "u"];

function checkVowel (vowels, char) {
    if(typeof(char) == "number") return "Number"
    for (const vowel of vowels) {
        if(vowel == char) return "Vowel";
    }
    return "Consonant";
}

let result = checkVowel(vowels, char);
// vowelCheck.textContent = `${char} is a ${result}`;

// * 2 - using reg expressions -
const checkMyVowel = (char = "0") => {
    char = String(char);
    if("aeiou".includes(char.toLowerCase()) && char !== "") {
        return "Vowel";
    }
    else if(/[a-z]/.test(char.toLowerCase())){
        return "Consonant";
    }
    return "Not a valid alphabet";
}

// console.log(checkMyVowel(char));

// * 3. Using ascii 
const checkMyVowel2 = (char = "0") => {
    char = String(char);
    if("aeiou".includes(char.toLowerCase()) && char !== "") {
        return "Vowel";
    }
    else if(char.charCodeAt() >= 97 && char.charCodeAt() <= 122){
        return "Consonant";
    }
    return "Not a valid alphabet";
}

// console.log(checkMyVowel2(char));

// ? 5. 
let year = 2392
const checkLeapYear = (year) => {
    if((year % 4 === 0 && year % 100 != 0) || year % 400 === 0){
        console.log(`${year} is leap year`);
        return;
    }
    console.log(`${year} is not leap year`);
}

// checkLeapYear(year);

// ? Homework q1
let character = "+";

const checkCase = (char) => {
    let charCode = char.charCodeAt();
    if(charCode >= 48 && charCode <= 57) return "Number";
    if(charCode >= 97 && charCode <= 122) return "lowercase";
    else if(charCode >= 65 && charCode <= 90) return "UPPERCASE";
    return "special character";
}

// console.log(checkCase(character));

// ? 2. 
let sides = [3, 3, 5];

const triangleType = (sides) => {
    if(!Array.isArray(sides) || sides.length !== 3) return;
    let [s1, s2, s3] = [...sides].sort((x, y) => x - y);

    if(s1 * s1 + s2 * s2 === s3 * s3) return "Right Angled Triangle";
    else if(s1 === s2 && s2 === s3) return "Equilateral Triangle";
    else if(s1 === s2 || s1 === s3 || s2 === s3) return "Isosceles Triangle";
    else return "Scalene Triangle";
}

// ? Optimized Code
const triangleType2 = (sides) => {
    if(!Array.isArray(sides) || sides.length !== 3) return;
    let [s1, s2, s3] = [...sides].sort((x, y) => x - y);
    if(s1 + s2 <= s3) throw new Error("Invalid sides");

    return s1 * s1 + s2 * s2 === s3 * s3 ? "Right Angled Triangle" : 
            s1 === s2 && s2 === s3 ? "Equilateral Triangle" : 
            s1 === s2 || s1 === s3 || s2 === s3 ? "Isosceles Triangle" : "Scalene Triangle";
}

// ? 3. 
let income = 1000000;

const calculatePercentage = (rate, income) => (rate / 100) * income;

const incomeTax = (income) => {
    if(income <= 250000) return "No Tax!";
    let twentyFive = calculatePercentage(5, 250000);

    if(income > 250000 && income <= 500000){
        return calculatePercentage(5, income - 250000);
    }
    else if(income > 500000 && income <= 1000000){
        income = income - 500000;
        return calculatePercentage(20, income) + twentyFive; 
    } 
    else if(income > 1000000){
        income = income - 1000000;
        let fiveLakh = calculatePercentage(20, 500000);
        return calculatePercentage(30, income) + fiveLakh + twentyFive;
    }
}

// console.log(incomeTax(income));

// * Optimized One - 
const slabs = [
    {limit: 250000, rate: 0},
    {limit: 500000, rate: 5},
    {limit: 1000000, rate: 20},
    {limit: Infinity, rate: 30}
]

const calIncomeTax = (income) => {
    if(income <= 250000) return 0;

    let tax = 0;
    let previousLimit = 0;
    
    for (const slab of slabs) {
        let taxLimit = Math.min(income, slab.limit);

        if(taxLimit > previousLimit){
            let taxIncome = taxLimit - previousLimit;
            tax += calculatePercentage(slab.rate, taxIncome);
        }

        if(income <= slab.limit) break;

        previousLimit = slab.limit;
    }
    
    return tax
}

// console.log(calIncomeTax(income));