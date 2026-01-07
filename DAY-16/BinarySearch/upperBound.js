// ? Q. Find the position to insert an element after all its occurrences. (Upper Bound). 
function upperBoundBinarySearch(arr, element){
    let start = 0;
    let end = arr.length;

    while(start < end){
        let mid = start + Math.floor((end - start) / 2);

        if(arr[mid] > element){
            end = mid;
        } else {
            start = mid + 1;
        }
    }

    return start;
}

/* Approach -
    Here, I used binary search to find the position where an element should be inserted 
    after all its existing occurrences in a sorted array. I searched for the first index 
    where the array value is strictly greater than the given element. If the middle value was greater, 
    I moved left to find a smaller valid index; otherwise, I moved right to skip all equal or smaller values. 
    Once the search finished, the resulting index gave the correct insertion position after all duplicates.
*/