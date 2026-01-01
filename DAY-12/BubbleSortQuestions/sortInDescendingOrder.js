// ? Q. Sort an Array in Descending Order Using Bubble Sort - 
function bubbleSortDescending(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let isSorted = false;
        for(let j = 0; j < arr.length - 1 - i; j++){
            if(arr[j] < arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isSorted = true;
            }
        }
        if(!isSorted) break;
    }
    return arr;
}