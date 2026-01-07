// ? Q. Find the Last Occurrence of a Repeated Number.
function binarySearchLastOccurance(arr, target){
    let start = 0; 
    let end = arr.length - 1;
    let lastIndex = -1;

    while(start <= end){
        let mid = start + Math.floor((end - start) / 2);

        if(target > arr[mid]){
            start = mid + 1;
        } else if(target < arr[mid]){
            end = mid - 1;
        } else {
            lastIndex = mid;
            start = mid + 1;
        }
    }
    
    return lastIndex;
}

/* 
    In this approach, I modify binary search so that it does not stop at the first match. 
    While checking the middle element, if it is equal to the target, 
    I record its index and deliberately continue the search toward the right side of the array. 
    This is because any later occurrence would also lie on the right in a sorted array. 
    If the middle element is smaller than the target, I shift the search range to the right, 
    and if it is larger, I move it to the left. When the loop ends, 
    the last stored index represents the final occurrence of the target.
*/