// ? Q. Sort an Array of Characters by ASCII Value.
function sortByAsciiValues(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let minIndex = i;

        for(let j = i + 1; j < arr.length; j++){
            if(arr[j].charCodeAt(0) < arr[minIndex].charCodeAt(0)){
                minIndex = j;
            }
        }

        if(minIndex !== i){
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr;
}