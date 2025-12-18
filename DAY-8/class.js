// ? Q1. Reverse a String - 
// * Using for loop -
let str = "punit";

function reverseStringUsingLoop(str){
    let reversed = "";
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
}

// console.log(reverseStringUsingLoop("punit"));

// * Using Two Pointer Algorithm and Array -
function reverseString(str){
    str = Array.from(str);
    let start = 0;
    let end = str.length - 1;

    while(start < end){
        [str[start], str[end]] = [str[end], str[start]];
        start++;
        end--;
    }

    return str.join("");
}

// console.log(reverseString("punitsahu"));

// * Without extra variables -
function reverseString2(str){
    let result = "";
    for (const char of str) {
        result = char + result;
    }
    return result;
}

// console.log(reverseString2("punitsahu"));

// * Using Two Pointer Algorithm -
function reversedStr(str){
    let str1 = "";
    let str2 = "";   
    let start = stop = Math.floor(str.length / 2);
    let end = str.length - 1;

    while(start >= 0 && end >= 0){
        str1 += str[start];
        if(end != stop) str2 += str[end]; 
        start--;
        end--;
    }

    return str2 + str1;
}

// console.log(reversedStr("punitsahu"));

// ? Q2. Check if a String is a Palindrome 
// * Bruteforce Method -
function isPalindrome(str){
    let reversed = "";

    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }

    return reversed === str;
}

// console.log(isPalindrome("raceecar"));

// * Using Two Pointer Algorithm - 
function isPalindromeTwo(str){
    let start = 0;
    let end = str.length - 1;

    while(start < end){
        if(str[start] !== str[end]) return false;
        start++;
        end--;
    }

    return true;
}

// console.log(isPalindromeTwo("ra cec ar"));

// ? Q3. Count Frequency of Each Character - 
function charFrequency(str){
    let charCount = {};
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}

// console.log(charFrequency("Banana"));

// ? Q4. Find the Most Frequent Character in a String - 
// * Using Loop - 
function mostFrequentChar(str){
    str = str.toLowerCase();
    let charCount = {};

    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let maxValue = Math.max(...Object.values(charCount));
    let largest = Object.entries(charCount).filter((val) => val[1] === maxValue);
    return largest[0];
}

// console.log(mostFrequentChar("Banana"));

// * Without Using Loop - 
function maxCharCount(str){
    str = str.toLowerCase();
    let charCount = {};
    let maxChar = "";
    let maxCount = 0;

    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
        if(charCount[char] > maxCount){
            maxChar = char;
            maxCount = charCount[char];
        }
    }
    return {maxChar, maxCount};
}

// console.log(maxCharCount("Banana"));

// ? Q5. Check if Two Strings Are Anagrams (Without Sorting) - 
function areAnagrams(str1, str2){
    if(str1.length !== str2.length) return false;
    let charCount = {};

    for (const char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of str2) {
        if(!charCount[char]) return false;
        charCount[char]--
    }

    return true;
}

// console.log(areAnagrams("silent", "listen"));

// ? Q6. Find the First Non-Repeating Character - 
function firstNonRepeatChar(str){
    let charCount = {};

    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let values = Object.entries(charCount).find((val) => val[1] == 1) || 0;
    return values;
}

// console.log(firstNonRepeatChar("aabbccddeeff"));