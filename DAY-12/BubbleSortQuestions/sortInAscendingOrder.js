// ? Q. Sort an Array in Ascending Order Using Bubble Sort -
function bubbleSortAscending(arr){
    let isSorted = false;
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isSorted = true;
            } 
        }
        if(!isSorted) break;
    }
    return arr;
}