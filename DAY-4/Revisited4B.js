// ? Q1. Split Number into Digits - 
function splitNums(num){
    let digits = [];

    while(num > 0){
        digits.unshift(Number(num % 10));
        num = Math.floor(num / 10);
    }

    return digits;
}

// console.log(splitNums(12345));

// ? Q2. Reverse a Number -
// * 1. Using String
function reverseNums(num){
    let reverse = "";

    while(num > 0){
        reverse += num % 10;
        num = Math.floor(num / 10);
    }

    return reverse;
}

// console.log(reverseNums(54678));

// * 2. Pure Mathematical approach - 
function reverseNums2(num){
    let digits = 0;
    
    while(num > 0){
        let lastDigit = num % 10;
        digits = (digits * 10) + lastDigit;
        num = Math.floor(num / 10);  
    }
    
    return digits;
}
// console.log(reverseNums2(54678));

// ? Q3. Remove the Decimal Point Mathematically - 
function removeDecimal(num){
    while(num % 1 !== 0){
        num = +(num * 10).toFixed(10);
    }
    return num;
}

// console.log(removeDecimal(123.4444));

// ? Q4. Separate Whole and Fractional Parts of a Number - 
function wholeAndFraction(num){
    let fraction = Number((num % 1).toFixed(10));
    let whole = Number((num - fraction).toFixed(10));
    return {whole, fraction};
}

// console.log(wholeAndFraction(12.7589));

// ? Q5. Generate a Decimal Number from Whole and Fractional Digits -
function getWhole(num){
    let whole = 0;
    for (let i = 0; i < num.length; i++) {
        whole = (10 * whole) + num[i];
    }
    return whole;
}

function makeWholeAndDecimal(whole, decimal){
    return getWhole(whole) + getWhole(decimal) / 10 ** decimal.length;
}

// ? Q6. Check if a Number is a Palindrome - 
// * Bruteforce -
function isPalindrome(num){
    let reverse = reverseNums2(num);
    return reverse === num;
}

// * Two Pointer algorithm - 
function isPalindrome2(num){
    num = String(num);
    let left = 0;
    let right = num.length - 1;

    while(left < right){
        if(num[left] !== num[right]) return false;
        left++;
        right--;
    }

    return true;
}
// console.log(isPalindrome2(12121));

// ? Q7. Check if a Number is an Armstrong Number (also called a Narcissistic Number) - 
function isArmstrong(num){
    let len = String(num).length;
    let n = num;
    let sum = 0;

    while(num > 0){
        let last = (num % 10) ** len;
        sum += last;
        num = Math.floor(num / 10);
    }

    return sum === n;
}

// console.log(isArmstrong(1634));

// ? Q8. Find the Sum of Digits - 
function sumOfDigits(num){
    let sum = 0;

    while(num > 0){
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    return sum;
}

// console.log(sumOfDigits(12345));

// ? Q9. Find the Average of Digits - 
function averageOfDigits(num){
    let count = 0;
    let sum = 0;

    while(num > 0){
        sum += Number(num % 10);
        num = Math.floor(num / 10);
        count++;
    }

    return sum / count;
}

// console.log(averageOfDigits(4567));

// ? Q10. Find the Largest and Smallest Digit in a Number - 
function maxMinDigit(n){
    let max = 0;
    let min = Infinity;

    while(n > 0){
        let digit = Number(n % 10);
        max = digit > max ? digit : max;
        min = digit < min ? digit : min;
        n = Math.floor(n / 10);
    }

    return {max, min};
}

// console.log(maxMinDigit(120394));

// ? Q11. Check if a Number is a Strong Number -
function isStrong(n){
    let num = n;
    const fact = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
    let sum = 0;

    while(n > 0){
        sum += fact[n % 10];
        n = Math.floor((n / 10));
    }

    return sum === num;
}

// console.log(isStrong(40585));

// ? Q12. Check if a Number is an Automorphic Number - 
function isAutomorphic(num){
    let len = num.toString().length; 
    let square = (num * num) % 10 ** len;
    return square === num;
}

// console.log(isAutomorphic(9376));

// ? Q13. Find the Frequency of Each Digit - 
function countNums(n){
    let count = {};

    while(n > 0){
        let digit = Number(n % 10);
        count[digit] = (count[digit] || 0) + 1;
        n = Math.floor(n / 10);
    }

    return count;
}

// console.log(countNums(112334555));

// ? Q14. Check if a Number is a Harshad Number - 
function isHarshad(n){
    let orgNum = n;
    let sum = 0;

    while(n > 0){
        sum += Number(n % 10);
        n = Math.floor(n / 10);
    }

    return orgNum % sum === 0;
}

console.log(isHarshad(22));