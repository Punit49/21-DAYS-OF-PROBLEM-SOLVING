// ? Q. Sort a 2D Array by Second Element in Each Subarray.
function sort2DArrayBy2ndElement(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let minIndex = i;

        for(let j = i + 1; j < arr.length; j++){
            if(arr[j][1] < arr[minIndex][1]){
                minIndex = j;
            }
        }

        if(minIndex !== i){
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}