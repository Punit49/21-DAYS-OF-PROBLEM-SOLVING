// ? Q. Sort an Array and Count How Many Times Minimum Changed.
function sortAndCountMin(arr){
    let minCount = 0;
    for(let i = 0; i < arr.length - 1; i++){
        let minIndex = i;

        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        
        if(minIndex !== i){
            minCount++;
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return minCount;
}