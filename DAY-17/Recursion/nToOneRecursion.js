// ? Q. Print Numbers from N to 1 Using Recursion.
function nToOneRecursion(n){
    if(n < 1) return;
    console.log(n);
    nToOneRecursion(n - 1);
}