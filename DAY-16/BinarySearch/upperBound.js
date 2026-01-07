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