// ? Q. Sort an Array Using Insertion Sort but Print Array After Each Pass.
function sortAndShowArrayState(arr){
    for(let i = 1; i < arr.length; i++){
        let cur = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j] > cur){
            arr[j + 1] = arr[j];
            j--;
        }
        
        arr[j + 1] = cur;
        console.log(arr);
    }

    return arr;
}