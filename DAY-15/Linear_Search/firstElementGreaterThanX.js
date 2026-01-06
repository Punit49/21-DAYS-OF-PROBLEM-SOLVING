// ? Q. Find the First Element Greater Than X. 
function firstElementGreaterThanX(arr, x){
    if(arr.length === 0) return null;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > x){
            return arr[i];
        }
    }
    return null;
}