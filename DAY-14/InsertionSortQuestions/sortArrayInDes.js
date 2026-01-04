// ? Q. Sort an Array in Descending Order.
function insertionSortDescending(arr){
    for(let i = 1; i < arr.length; i++){
        let cur = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j] < cur){
            debugger;
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = cur;
    }
    return arr;
}