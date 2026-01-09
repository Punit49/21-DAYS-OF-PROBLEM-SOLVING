// ? Q. Find the Sum of Digits of a Number Using Recursion.
function sumOfDigits(n){
    n = Math.abs(n);
    if(n === 0) return 0;
    return (n % 10) + sumOfDigits(Math.floor(n / 10));
}