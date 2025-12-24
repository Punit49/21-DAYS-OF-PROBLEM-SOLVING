// ? Q. Remove All Duplicates From an Array - 
// * Using Hash map - Checking seen elements and storing only, which are not previously seen.
function removeDuplicates(arr){
    let seen = {};
    let newArr = [];

    for(let i = 0; i < arr.length; i++){
        let char = arr[i];
        if(!seen[char]){
            seen[char] = true;
            newArr.push(char);
        }
    }

    return newArr;
}

console.log(removeDuplicates(["a", "b", "a", "c", "d", "b"]));

// * Using Filter - 
function removeDuplicates2(arr){
    return arr.filter((char, index) => arr.indexOf(char) === index);
}

console.log(removeDuplicates2(["a", "b", "a", "c", "d", "b"]));

// * Using set (one Liner) - Set stores only unique characters by default.
function removeDuplicates3(arr){
    return new Set([...arr]);
}

console.log(removeDuplicates3([1, 2, 2, 3, 3, 4]));