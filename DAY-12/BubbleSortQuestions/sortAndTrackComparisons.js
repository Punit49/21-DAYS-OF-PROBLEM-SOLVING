// ? Q. Sort an Array and Track How Many Comparisons Were Made - 
function sortAndTrackComparisons(arr){
    let comparisonCount = 0;
    for(let i = 0; i < arr.length - 1; i++){
        let sorted = false;

        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                sorted = true;
            }
            comparisonCount++;
        }   
        if(!sorted) break;
    }

    return {sorted: arr, comparisonCount};
}