// ? Q. Reverse a String Using Recursion.
// * Using two pointer algorithm.
function reverse(str){
    str = Array.from(str);
    function helper(start, end){
        if(start >= end) return str;
        [str[start], str[end]] = [str[end], str[start]];
        return helper(start + 1, end - 1);
    }
    return helper(0, str.length - 1).join("");
}

// * Less Efficient - due to O(n^2) time compexity
function reverse2(str){
    if(str.length === 0) return "";
    function helper(i){
        if(i === 0) return str[0];
        return str[i] + helper(i - 1);
    }
    return helper(str.length - 1);
}

// * Learnings - 
// 1. Avoid using ++ or -- inside recursive function arguments (causes infinite recursion).
// 2. Recursive string concatenation costs O(n) per step due to string immutability.