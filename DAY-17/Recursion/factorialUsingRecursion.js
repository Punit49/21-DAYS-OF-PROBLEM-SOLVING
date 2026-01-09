// ? Q. Find Factorial of a Number Using Recursion.
function getFactorial(n){
    if(n < 2) return 1;
    return n * getFactorial(n - 1);
}