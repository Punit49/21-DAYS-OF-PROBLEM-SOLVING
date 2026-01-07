// ? Q. Count How Many Times an Element Appears. 
function getFirstIndex(arr, target){
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

function getLastIndex(arr, target){
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

function frequencyBinarySearch(arr, target){
    let firstIdx = getFirstIndex(arr, target);
    let lastIdx = getLastIndex(arr, target);
    return firstIdx === -1 ? 0 : (lastIdx - firstIdx + 1);
}