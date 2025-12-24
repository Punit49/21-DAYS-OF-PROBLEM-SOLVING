// ? Q. Check if an Array is Sorted (Ascending) - 
function isSortedArray(arr){
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] > arr[i + 1]) return false;
    }
    return true;
}

console.log(isSortedArray([1, 2, 3, 7, 5, 6]));

// ? Q. Check if an Array is Sorted in Ascending decending -
function ascendingOrDescending(arr){
    if(arr.length <= 1) return "Ascending";
    let isAsceinding = true;
    let isDescending = true;
    
    for(let i = 1; i < arr.length; i++){
        if(arr[i - 1] > arr[i] && isAsceinding) isAsceinding = false;
        if(arr[i - 1] < arr[i] && isDescending) isDescending = false;

        if(!isAsceinding && !isDescending) return "Not Sorted";
    }
    
    return isAsceinding ? "Ascending" : "Descending";
}

console.log(ascendingOrDescending([1, 2, 3, 4, 5, 6]));