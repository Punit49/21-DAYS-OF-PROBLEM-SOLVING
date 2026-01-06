// ? Q. Check if Array is Strictly Increasing by 1 (Using Linear Scan). 
function isArrayIncreasing(arr){
    if(arr.length <= 1) return false;
    
    for(let i = 1; i < arr.length; i++){
        if(arr[i] !== arr[i - 1] + 1){
            return false;
        }
    }
    
    return true;
}

// ? Q. Check if Array is Strictly Increasing.
function isArrayIncreasing2(arr){
    if(arr.length <= 1) return false;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] <= arr[i - 1]){
            return false;
        }
    }

    return true;
}