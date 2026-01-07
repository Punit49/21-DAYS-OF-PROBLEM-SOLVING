// ? Q. Find the First Occurrence of a Repeated Number.

function binarySearchFirstOccurance(arr, target){
    let start = 0;
    let end = arr.length - 1;
    let firstIdx = -1;

    while(start <= end){
        let mid = start + Math.floor((end - start) / 2);

        if(target > arr[mid]){
            start = mid + 1;
        } else if(target < arr[mid]){
            end = mid - 1;
        } else {
            firstIdx = mid;
            end = mid - 1;
        }
    }

    return firstIdx;
}

/*
    This approach modifies binary search to find the first occurrence instead of stopping at the first match. 
    While comparing the middle element with the target, if the target is greater, 
    the search moves to the right half, and if it is smaller, it moves to the left half. 
    When the middle element matches the target, the index is stored as a possible answer, 
    but the search continues toward the left side because any earlier occurrence must lie there in a sorted array. 
    The loop continues until the search range is exhausted, and the stored index represents the first occurrence of the target.
*/