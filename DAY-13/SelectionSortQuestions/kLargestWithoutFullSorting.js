// ? Q. Find the K Largest Elements Without Full Sorting - 
function kLargestWithoutFullSorting(arr, k){
    for(let i = 0; i < k; i++){
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
    return arr.slice(0, k);
}