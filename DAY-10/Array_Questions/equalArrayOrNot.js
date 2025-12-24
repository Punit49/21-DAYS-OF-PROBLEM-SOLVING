// ? Q. Check if Two Arrays Are Equal (Same Order) - 

// * Approach - We first check array lengths, then compare elements at each index in a single loop to ensure same order and values.

function isEqualArrays(arr1, arr2){
    if(arr1.length !== arr2.length) return false;

    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]) return false;
    }

    return true;
}

console.log(isEqualArrays([1, 2, 3], [1, 2, 3]));