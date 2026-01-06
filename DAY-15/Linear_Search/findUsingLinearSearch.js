// ? Q. Find an Element in an Array Using Linear Search. 
function linearSearch(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target) return i;
    }
    return -1;
}