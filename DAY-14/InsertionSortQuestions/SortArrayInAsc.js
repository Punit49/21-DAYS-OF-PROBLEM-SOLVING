// ? Q. Sort an Array in Ascending Order Using Insertion Sort.
function insertionSortAscending(arr){
    for(let i = 1; i < arr.length; i++){
        let cur = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j] > cur){
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = cur;
    }
    return arr;
}