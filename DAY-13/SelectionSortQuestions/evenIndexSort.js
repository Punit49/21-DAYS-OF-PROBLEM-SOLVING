// ? Q. Sort Only Elements at Even Indexes.
function sortEvenIndexes(arr){
    for(let i = 0; i < arr.length - 1; i += 2){
        let minIndex = i;

        for(let j = i + 2; j < arr.length; j += 2){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }

        if(i !== minIndex){
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}