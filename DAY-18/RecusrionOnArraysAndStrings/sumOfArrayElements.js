// ? Q. Find the Sum of All Elements in an Array Using Recursion.
function sumOfArray(arr){
    function helper(i){
        if(i === arr.length) return 0;
        return arr[i] + helper(i + 1);
    }
    return helper(0);
}