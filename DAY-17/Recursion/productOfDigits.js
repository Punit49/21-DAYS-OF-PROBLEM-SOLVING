// ? Q. Find the Product of Digits of a Number Using Recursion.
function productOfDigits(n){
    n = Math.abs(n);
    if(n < 10) return n;
    return (n % 10) * productOfDigits(Math.floor(n / 10));
}   