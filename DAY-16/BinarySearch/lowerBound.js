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