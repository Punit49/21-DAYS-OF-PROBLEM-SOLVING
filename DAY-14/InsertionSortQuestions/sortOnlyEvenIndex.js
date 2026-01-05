// ? Q. Use Insertion Sort to Sort Only the Even Index Positions.
function sortEvenIndexs(arr){
    for(let i = 2; i < arr.length; i += 2){
        let cur = arr[i];
        let j = i - 2;

        while(j >= 0 && arr[j] > cur){
            arr[j + 2] = arr[j];
            j -= 2;
        }

        arr[j + 2] = cur;
    }
    return arr;
}