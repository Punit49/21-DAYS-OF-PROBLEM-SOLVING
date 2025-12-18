// ? Q1. Remove All Duplicate Characters (Keep First Occurrence) - 
function removeDuplicateChar(str){
    let charObject = {};
    let removed = "";

    for(let char of str) {
        charObject[char] = (charObject[char] ?? 0) + 1;
        if(charObject[char] === 1) removed += char;
    }
    return removed;
}

// console.log(removeDuplicateChar("programming"));

// * Better Way - 
function nonRepeatingString(str){
    let result = "";
    let seen = {};
    
    for (const char of str) {
        if(!seen[char]){
            result += char;
            seen[char] = true;
        }
    }
    return result;
}

// console.log(nonRepeatingString("programming"));

// ? Q2. Check if a String Contains Only Alphabets (No Regex) - 
function isAlphabetOnly(str){
    if(str.length === 0) return false;
    for (const char of str) {
        let code = char.toLowerCase().charCodeAt(0);
        if(code < 97 || code > 122) return false;
    }   
    return true;
}

// console.log(isAlphabetOnly("HelloWorld12"));

// * Using Regex - 
function isAlphabetOnlyRegex(str){
    if(str.length === 0) return false;
    for(const char of str){
        let code = char.charCodeAt(0);
        if(!(/^[a-zA-Z]+$/.test(char))) return false;
    }
    return true;
}

// console.log(isAlphabetOnlyRegex("HelloWorld12"));

// ? Q3. Reverse Only the Words in a Sentence - 
function reverseWords(str){
    let result = newStr = "";

    for(let i = str.length - 1; i >= 0; i--){
        let char = str[i];
        
        if(char === " "){
            newStr += result + " ";
            result = "";
        }
        
        result = (char == " " ? "" : char) + result;
    }
    return newStr + result;
}

// console.log(reverseWords("I Love Coding"));

// ? Q4. Find the Longest Word in a Sentence - 
function longestWordInSentence(str){
    let longestWord = word = "";

    for(let i = str.length - 1; i >= 0; i--){
        let char = str[i];
        
        word = (char === " " ? "" : char) + word;

        if(char === " " || i === 0){
            if(word.length > longestWord.length) {
                longestWord = word;
            }
            word = "";  
        }
    }

    return {longestWord};
}

// console.log(longestWordInSentence("coding is beautiful"));

// ? Q5. Count the Number of Words (Manually Without split) - 
function wordCounter(str){
    str = str.trim();
    if(str.length === 0) return 0;
    let count = 0;

    for(let i = 0; i < str.length; i++){
        let char = str[i];
        if(char === " " && str[i - 1] !== " ") count++;
    }

    return count + 1;
}

// console.log(wordCounter("  hi   there  world "));

// * Clean Way - 
function wordCounter2(str){
    str = str.trim();
    if(str.length === 0) return 0;
    let inWord = false, count = 0;

    for (const char of str) {
        if(char !== " " && !inWord){
            count++;
            inWord = true;
        } else if(char === " "){
            inWord = false;
        }
    }

    return count;
}

// console.log(wordCounter2("  hi   there  world "));

// ? Q6. Find All Substrings of a String (No Built-ins) - 
function getSubstrings(str){
    let subString = [];
    for(let i = 0; i < str.length; i++){
        let res = "";
        for(let j = i; j < str.length; j++){
            res += str[j];
            subString.push(res);
        }
    }
    return subString;
} 

// console.log(getSubstrings("abcd"));

// ? Q7. Compress a String (Basic Run-Length Encoding) - 
function getCompressedString(str){
    if(str.length === 0) return "";
    let compressed = "";
    let count = 1;

    for(let i = 0; i < str.length; i++){
        if(str[i] == str[i + 1]){
            count++;
        } else {
            compressed += `${str[i]}${count}`;
            count = 1;
        }
    }

    return compressed;
}

console.log(getCompressedString("aaabbcccdd"));