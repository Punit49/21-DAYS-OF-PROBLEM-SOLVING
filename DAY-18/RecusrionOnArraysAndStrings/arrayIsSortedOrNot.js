// ? Q. Check if an Array Is Sorted (Ascending) Using Recursion.
function isSorted(arr){
    if(arr.length <= 1) return true;    
    function helper(i){
        if(i === arr.length - 1) return true;
        if(arr[i] > arr[i + 1]) return false;
        return helper(i + 1);
    }
    return helper(0);
}