// ? Q. Check if All Elements in an Array Are Even Using Recursion.
function isEven(arr){
    if(arr.length === 0) return true;

    function helper(i){
        if(arr[i] % 2 !== 0) return false;
        if(i === 0) return true;
        return helper(i - 1);
    }
    
    return helper(arr.length - 1);
}