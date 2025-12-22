// ? Q. Find the Longest Palindromic Substring - 
// * Using Two pointer algorithm - I generated substrings, check each using a two-pointer palindrome check, and keep updating the longest palindrome found. (Brute-force method)

function isPalindrome(str){
    let start = 0, end = str.length - 1;

    while(start < end){
        if(str[start] !== str[end]) return false;
        start++;
        end--;
    }
    return true;
}

function longestPalindromicString(str){
    let longest = "";
    for(let i = 0; i < str.length; i++){
        let word = "";
        for(let j = i; j < str.length; j++){
            word += str[j];
            if(isPalindrome(word)){
               longest = word.length > longest.length ? word : longest;
            }
        }
    }

    return longest;
}

console.log(longestPalindromicString("babad"));

// * Using Expand Around Center algorithm - Starting from center of each character then expanding into right and left until there is palindrome string, and accordingly updating start and end index of longest palindromic string.

function expandAroundCenter(str){
    let start = end = 0;
    
    function expand(l, r){
        while(l >= 0 && r < str.length && str[l] === str[r]){
            l--;
            r++
        }
        return r - l - 1;
    }
    
    for(let i = 0; i < str.length; i++){
        let odd = expand(i, i);
        let even = expand(i, i + 1);
        let len = Math.max(odd, even);
        
        if(len > end - start){
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    
    return str.slice(start, end + 1);
}

console.log(expandAroundCenter("babad"));