// ? Q. Sort an Array and Count the Number of Swaps Performed -
function swapCountAndSort(arr){
    let sorted = false;
    let swapCount = 0;

    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - 1 - i; j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapCount++;
                sorted = true;
            }
        }
        if(!sorted) break;
    }

    return {Sorted: arr, Swaps: swa};
}