// ? Q. Print Numbers from 1 to N Using Recursion.
function oneToNRecursion(n){
    if(n <= 0) return;
    oneToNRecursion(n - 1);
    console.log(n);
}