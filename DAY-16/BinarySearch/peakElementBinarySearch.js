// ? Q. Find the Peak Element in a Mountain Array (Binary Search Variant). 
// * Optimized Version - 
function peakMountainElement(arr){
    let start = 0;
    let end = arr.length - 1;

    while(start < end){
        let mid = start + Math.floor((end - start) / 2);

        if(arr[mid] < arr[mid + 1]){
            start = mid + 1;
        } else {
            end = mid;
        }
    }

    return arr[start];
}

/*  Approach -
    This function finds the peak element in a mountain array using binary search 
    by observing the direction of the slope. At each step, 
    I compare the middle element with the next element. If the middle element is smaller 
    than the next one, it means the array is still increasing, so the peak must lie
    on the right side and I move start to mid + 1. Otherwise, the array is decreasing 
    or at the peak, so the peak lies on the left side or at mid, and I move end to mid. 
    By repeatedly narrowing the search range this way, start and end eventually meet 
    at the peak index, which is returned.
*/

// * 2
function peakMountain(arr){
    let start = 0;
    let end = arr.length - 1;
    let ans = 0;

    while(start <= end){
        let mid = start + Math.floor((end - start) / 2);

        if(arr[mid] < arr[mid + 1]){
            start = mid + 1;
        } else if(arr[mid] < arr[mid - 1]){
            end = mid - 1;
        } else {
            return mid;
        }
    }

    return -1;
}