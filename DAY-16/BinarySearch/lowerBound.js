// ? Q. Find the Index Where an Element Should Be Inserted (Lower Bound).
function lowerBoundBinarySearch(arr, element){
    let start = 0;
    let end = arr.length;

    while(start < end){
        let mid = start + Math.floor((end - start) / 2);

        if(arr[mid] >= element){
            end = mid;  
        } else {
            start = mid + 1;
        } 
    }

    return start;
}


/* Approach
    I used binary search to find the position where an element should be inserted 
    so that the array remains sorted and the element is placed before all its existing occurrences. 
    I searched for the first index where the array value is greater than or equal to the 
    given element. Whenever I found a possible position, I moved the search to the left 
    to check if an earlier valid index exists; otherwise, I moved right. 
    At the end, the resulting index was returned as the correct insertion position..
*/