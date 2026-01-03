// ? Q. Sort an Array in Descending Order.
function selectionSortDes(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let maxIndex = i;

        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] > arr[maxIndex]){
                maxIndex = j;
            }
        }
        
        if(maxIndex !== i){
            [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
        }
    }

    return arr;
}