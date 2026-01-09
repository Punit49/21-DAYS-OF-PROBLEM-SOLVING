// ? Q. Find the Sum of Even Numbers from 1 to N Using Recursion.
function sumOfEven(n){
    if(n <= 0) return 0;
    if(n % 2 !== 0) return sumOfEven(n - 1);
    return n + sumOfEven(n - 2);
}

// * More Readable version -
function sumOfEven2(n){
    if(n % 2 !== 0) n = n - 1;
    if(n <= 1) return 0;
    if(n === 2) return 2;
    return n + sumOfEven(n - 2);
}