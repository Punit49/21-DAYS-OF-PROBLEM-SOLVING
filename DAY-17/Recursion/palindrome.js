// ? Q. Check if a Number is Palindrome Using Recursion.
function isPalindrome(n){
    function helper(n, rev){
        if(n === 0) return rev;
        return helper(Math.floor(n / 10), rev * 10 + (n % 10));
    }
    return n === helper(n, 0);
}