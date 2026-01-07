// ? Q.Find the Smallest Element Greater Than a Given Value.
function smallestGreater(arr, target){
    let start = 0;
    let end = arr.length - 1;
    let ansIndex = -1;

    while(start <= end){
        let mid = start + Math.floor((end - start) / 2);

        if(arr[mid] > target){
            ansIndex = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return ansIndex === -1 ? -1 : arr[ansIndex];
}

// * My goal is to find the smallest value in the sorted array that is still greater than the given target. During binary search, when the middle element is greater than the target, it can be a valid answer, but there may exist a smaller valid element on the left side, so I store the index and continue searching the left half. When the middle element is less than or equal to the target, that element and all elements to its left cannot satisfy the condition, so I discard the left half and move the search to the right. By repeatedly eliminating the impossible half and storing possible answers, the final stored index gives the smallest element greater than the target.