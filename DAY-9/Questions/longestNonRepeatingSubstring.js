// ? Q. Find the Longest Substring Without Repeating Characters - 

// * Using Sliding Window Protocol - I am using two pointers to maintain a window of unique characters. The right pointer expands the window and adds characters to the hash. If a duplicate comes, I shrink the window from the left until it becomes valid again. 

function longestNonRepeatingSubstring(s){
    let hash = Array(255).fill(0);
    let left = 0, maxLen = 0;

    for(let right = 0; right < s.length; right++){
        let code = s[right].charCodeAt(0);

        while(hash[code] === 1){
            hash[s[left].charCodeAt(0)] = 0;
            left++;
        }

        hash[code] = 1;
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}

console.log(longestNonRepeatingSubstring("abcaefghj"));

// * Using Array as hash Map -   I fix one index and try to build the longest substring from there. I use an array as a hash map to track repeated characters. As soon as a duplicate appears, I stop expanding that substring. 

function longestNonRepeatingSubstring2(s){
    let maxLen = 0;

    for(let i = 0; i < s.length; i++){
        let hash = Array(255).fill(0);

        for(let j = i; j < s.length; j++){
            let charCode = s[j].charCodeAt(0);
            if(hash[charCode] == 1) break;
            
            let len = j - i + 1;
            maxLen = Math.max(len, maxLen);
            hash[charCode] = 1;
        }
    }
    
    return maxLen;
}

console.log(longestNonRepeatingSubstring2("abcaefghj"));

// * Bruteforce method -I generate all possible substrings. For every substring, I check if all characters are unique using a frequency object. If it is valid, I compare and store the longest one.

function longestNonRepeatingSubstring3(s){ 
    let longest = "";

    function isReapted(s){
        let count = {};
        for (const char of s) {
            count[char] = (count[char] || 0) + 1; 
            if(count[char] > 1) return false;
        }
        return Math.max(...Object.values(count)) == 1;
    }

    for(let i = 0; i < s.length; i++){
        let word = "";
        for(let j = i; j < s.length; j++){
            word += s[j];
            if(isReapted(word)){
                if(word.length > longest.length) longest = word;
            } else {
                break
            }
        } 
    }
    return {longest};
}   

console.log(longestNonRepeatingSubstring3("abcaefghj"));

