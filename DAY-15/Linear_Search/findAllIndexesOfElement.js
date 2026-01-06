// ? Q. Find All Indexes Where the Element Appears.

function getAllIndexesOfElement(arr, element){
    let indexes = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === element){
            indexes.push(i);
        }
    }

    return indexes;
}