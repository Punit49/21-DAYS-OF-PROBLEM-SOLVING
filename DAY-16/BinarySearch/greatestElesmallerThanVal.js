// ? Q. Find the Greatest Element Smaller Than a Given Value.
function greatestSmaller(arr, target){
    let start = 0;
    let end = arr.length - 1;
    let ansIndex = -1;

    while(start <= end){
        let mid = start + Math.floor((end - start) / 2);

        if(arr[mid] < target){
            ansIndex = mid;
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return ansIndex === -1 ? -1 : arr[ansIndex];
}


// * Here the goal is to find the largest value in the sorted array that is still smaller than the target. While performing binary search, when the middle element is smaller than the target, it can be a valid answer, but a larger valid element might exist on the right side, so I store the index and move the search to the right. When the middle element is greater than or equal to the target, that element and all elements to its right cannot be part of the answer, so I discard the right half and move the search to the left. This process continues until the search space is exhausted, and the stored index represents the greatest element smaller than the target.