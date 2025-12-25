// ? Q. Count How Many Times an Element Appears in an Array.
function elementCount(arr, target){
    let count = 0;
    for (const ele of arr) {
        if(ele === target) count++
    }
    return count;
}

console.log(elementCount([1, 4, 4, 4, 2], 4));

// * Using filter - 
function elementCount2(arr, target){
    return arr.filter((ele) => ele === target).length;
}

console.log(elementCount2([1, 4, 4, 4, 2], 4));