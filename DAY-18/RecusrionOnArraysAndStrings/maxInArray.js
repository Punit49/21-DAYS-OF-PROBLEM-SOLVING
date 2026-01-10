// ? Q. Find the Maximum Element in an Array Using Recursion.
function getMax(arr){
    if(arr.length === 0) return 0;

    function helper(i, max){
        if(arr[i] > max) {
            max = arr[i];
        }
        if(i === 0) return max;
        return helper(i - 1, max);
    }

    return helper(arr.length - 1, 0);
}