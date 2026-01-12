// ? Q. Find nth fibonacci term using recursion.
function nthFibonacci2(n){
    if(n <= 0) return null;
    function helper(pre, cur, i){
        if(i === n) return cur;
        return helper(cur, pre + cur, i + 1);
    }
    return helper(0, 1, 1);
}

// * Method 2 -
function nthFibonacci(n){
    if(n === 0 || n === 1) return n;
    return nthFibonacci(n - 1) + nthFibonacci(n - 2);
}
