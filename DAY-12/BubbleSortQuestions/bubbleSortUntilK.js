// ? Q. Sort an Array in Ascending Order but Stop After K Passes - 
function sortUntilK(arr, k){
    for(let i = 0; i < k; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }  
        }
    }

    return arr;
}