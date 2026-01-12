// ? Q. Find an Element Using Binary Search.
function binarySearch(arr, target){
    let start = 0;
    let end = arr.length - 1;

    while(start <= end){
        let mid = start + Math.floor((end - start) / 2);

        if(target > arr[mid]){
            start = mid + 1;
        } else if(target < arr[mid]) {
            end = mid - 1;
        } else {
            return mid;
        }
    }

    return -1;
}

/*  Approach -
    Binary search works on the idea of eliminating half of the search space,
    at every step, using the sorted order of the array. I begin by checking the middle element, 
    if it is equal to the target, the search is complete. If the middle element is greater than the target, 
    I know that the target cannot exist in the right half, so I discard it and continue searching on the left side. 
    If the middle element is smaller than the target, I discard the left half and search on the right. 
    By repeating this process, the range of possible positions keeps shrinking until either the target is found,
    or there are no elements left to check, which makes the algorithm efficient.
*/