// ? Q. Reverse an Array - 
// * Using Two Pointers algorithm - Iterating over start and end index of array and swapping thier values, in each iteration start increases by 1 and end decreases by 1.

function reverseArray(arr){ 
    let start = 0;
    let end = arr.length - 1;

    while(start < end){
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }

    return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

// * Using Loop - 
function reverseArray2(arr){
    let newArr = [];
    
    for(let i = arr.length - 1; i >= 0; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(reverseArray2([1, 2, 3, 4, 5]));

// * Using Reduce (one liner) -
function reverseArray3(arr){
    return arr.reduce((acc, cur) => [cur, ...acc], []);
}

console.log(reverseArray3([1, 2, 3, 4, 5]));