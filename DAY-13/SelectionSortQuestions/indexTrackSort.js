// ? Q. Selection Sort but Track Index of minIndex for Each Pass.
function sortAndTrackIndex(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let minIndex = i;

        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }

        console.log(`Pass-${i + 1} ${arr[minIndex]}`);

        if(minIndex !== i){
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }

    return arr;
}