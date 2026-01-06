// ? Q. Check If an Element Exists in a 2D Array.
function twoDArrayLinearSearch(arr, element){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] === element){
               return `Found At: (${i}, ${j})`;
            }
        }
    }
    return -1;
}

// * When array is sorted in both directions - 
// 1   4   7
// 2   5   8
// 3   6   9

function searchIn2DSortedArray(arr, element){
    let row = 0;
    let col = arr[0].length - 1;

    while(row < arr.length && col >= 0){
        if(arr[row][col] === element){
            return `Found At - ${row}:${col}`;
        } else if(arr[row][col] > element){
            col--;
        } else {
            row++;
        }
    }

    return -1;
}