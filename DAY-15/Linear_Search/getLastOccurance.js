// ? Q. Find the Last Occurrence of an Element.
// * 1. 
function findLastOccurance(arr, target){
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// * 2. 
function findLastOccurance2(arr, target){
    let last = -1;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            last = i;
        }
    }
    return last;
}