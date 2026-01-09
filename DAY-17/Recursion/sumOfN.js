// ? Q. Find the Sum of First N Natural Numbers Using Recursion.
function getSum(n){
    if(n < 1) throw new Error(`${n} Is not a natural number`);
    if(n === 1) return 1;
    return n + getSum(n - 1);
}