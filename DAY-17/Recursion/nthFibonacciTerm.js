// ? Q. Find nth fibonacci term using recursion.
function nthFibonacci(n){
    if(n === 0 || n === 1) return n;
    return nthFibonacci(n - 1) + nthFibonacci(n - 2);
}

// * Method 2 -
function nthFibonacci2(n){
    if(n <= 0) return null;
    function helper(pre, cur, i){
        if(i === n) return cur;
        return helper(cur, pre + cur, i + 1);
    }
    return helper(0, 1, 1);
}

function isSorted20(arr){
    function helper(i){
        if(i === arr.length - 1) return true;
        if(arr[i - 1] > arr[i]) return false;
        return helper(i + 1);
    }
    return helper(1);
}

function isSorted30(arr, n){
    if(n === 0 || n === 1) return true;
    return (arr[n - 1] >= arr[n - 2]) && (isSorted30(arr, n - 1))
}