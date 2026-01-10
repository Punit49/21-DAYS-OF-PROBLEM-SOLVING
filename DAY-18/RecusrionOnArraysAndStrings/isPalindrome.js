// ? Q. Check if a String Is Palindrome Using Recursion.
// * Using two pointer only - 
function isPalindrome(str){
    if(str.length === 0) return true;

    function helper(start, end){
        if(start >= end) {
            return true;
        }
        if(str[start] !== str[end]) return false;
        return helper(start + 1, end - 1);
    }
    
    return helper(0, str.length - 1);
} 

// * Using reverse string 
function isPalindrome2(str){
    if(str.length === 0) return true;
    let originalStr = str;
    str = Array.from(str);

    function helper(start, end){
        if(start >= end) return str;
        [str[start], str[end]] = [str[end], str[start]];
        return helper(start + 1, end - 1);
    }

    return originalStr === helper(0, str.length - 1).join(""); 
}

/*  Learning -
    Array.from(str), creates array of characters on the basis of character itself,  
    while str.split("") creates array of characters on the basis of unicode.
*/