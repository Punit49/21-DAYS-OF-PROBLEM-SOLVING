// ? Q. Find the Maximum and Minimum Element - 

// * Using loop - Iterating over each number and checking if current number is greater than max or less than min and if so then updating min and max values respectively.

function minMaxInArray(arr){
    let max = arr[0];
    let min = arr[0];

    for(let i = 0; i < arr.length; i++){arr[i]
        if(arr[i] > max) max = arr[i];
        if(arr[i] < min) min = arr[i];
    }

    return {min, max};
}

console.log(minMaxInArray([10, 20, 900, 9]));

// * Using Inbuilts - 
function minMaxInArray2(arr){
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    
    return {min, max};
}

console.log(minMaxInArray2([10, 20, 900, 9]));