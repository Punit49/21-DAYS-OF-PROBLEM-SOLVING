// ? Q. Find the First Repeating Element in an Array -
// * If we are considering element, which appears first and repeats (Ex - 5).
function getFirstRepeatingElement(arr){
    let seen = {};
    let firstOccurance = Infinity;

    for (let i = 0; i < arr.length; i++) {
        let char = arr[i];
        if(seen[char] !== undefined){
            if(seen[char] < firstOccurance){
                firstOccurance = seen[char];
            }
        } else {
            seen[char] = i;
        }
    }

    return firstOccurance === Infinity ? null : arr[firstOccurance];
}

console.log(getFirstRepeatingElement([10, 5, 3, 4, 3, 5, 6]));

// * If we are considering element, which repeats first (Ex - 3). 
function getFirstRepeatingElement2(arr){
    let seen = {};
    
    for (const char of arr) {
        if(seen[char]) return char;
        seen[char] = true;
    }
    
    return null;
}

console.log(getFirstRepeatingElement2([10, 5, 3, 4, 3, 5, 6]));