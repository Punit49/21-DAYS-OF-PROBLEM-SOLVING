// ? Q. Linear Search in Array of Objects by id. 
function linearSearchObject(arr, targetId){
    for(let i = 0; i < arr.length; i++){
        if(arr[i].id === targetId){
            return arr[i];
        }
    }
    return {};
}   