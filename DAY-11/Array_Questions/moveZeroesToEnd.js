// ? Q. Move All Zeroes to End (Stable, O(n)) -
// * Optimized -
function moveZeroesToEnd(arr){
    let index = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            arr[index++] = arr[i];
        }
    }

    while(index < arr.length){
        arr[index++] = 0;
    }

    return arr;
}

console.log(moveZeroesToEnd([0, 0, 1, 0, 3, 12]));

// * Bruteforce -
function moveZeroesToEnd2(arr){
    let newArray = [];
    for(let i = arr.length - 1; i >= 0; i--){
        let num = arr[i];
        if(num === 0) newArray.push(num);
        else newArray.unshift(num);
    }
    return newArray;
}

console.log(moveZeroesToEnd2([0, 1, 0, 3, 12]));