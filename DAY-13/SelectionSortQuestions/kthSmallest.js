// ? Q. Find the Kth Smallest Element Using Selection Logic.
function kthSmallestSelectionSort(arr, k){
    for(let i = 0; i < k; i++){
        let minIndex = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }

        if(minIndex !== i){
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr[k - 1];
}
