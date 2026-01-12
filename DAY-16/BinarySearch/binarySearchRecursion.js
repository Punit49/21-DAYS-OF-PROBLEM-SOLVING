// ? Q. Implement Binary search algorithm using recursion.
function recursiveBS(arr, target){
    function helper(start, end){
        if(start > end) return -1;
        let mid = start + Math.floor((end - start) / 2);

        if(target > arr[mid]){
            return helper(mid + 1, end);
        } else if(target < arr[mid]){
            return helper(start, mid - 1);
        } else {
            return mid;
        }
    }
    return helper(0, arr.length - 1);
}