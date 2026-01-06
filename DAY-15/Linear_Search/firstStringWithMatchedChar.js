// ? Q. Find the First String That Starts With a Given Character.
function firstMatchingString(arr, char){
    if(arr.length === 0) return null;

    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > 0 && arr[i][0] === char){
            return arr[i];
        }
    }

    return null;
}