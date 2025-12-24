// ? Q. Merge Two Arrays Without Using concat or spread - 
function mergeTwoArrays(arr1, arr2){
    let merged = [];

    for(let i = 0; i < arr1.length; i++){
        merged.push(arr1[i]);
    }
    for(let i = 0; i < arr2.length; i++){
        merged.push(arr2[i]);
    }
    
    return merged;
}

console.log(mergeTwoArrays([1, 2, 3], [4, 5]));