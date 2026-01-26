// ? Q. Sort a 2D Array by the First Element of Each Subarray - 
function twoDArrayBubbleSort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j][0] > arr[j + 1][0]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}