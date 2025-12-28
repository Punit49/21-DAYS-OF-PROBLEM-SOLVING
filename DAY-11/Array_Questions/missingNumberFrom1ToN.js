// ? Q. Find Missing Number from Range 1 to N - 
// * Optimized solution -
function getMissingNumbers(arr){
    let arrSum = 0;
    let n = arr[0];
    
    for (const num of arr) {
        if(num > n) n = num;
        arrSum += num;
    }

    let actualSum = ((n * (n + 1)) / 2) - arrSum;
    return actualSum == 0 ? null :  actualSum;
}

// console.log(getMissingNumbers([1, 10, 9, 7, 3, 2, 5, 6, 8]));

// * if array is sorted - 
function getMissingNumbers2(arr){
    let start = arr[0];
    
    for (let i = 0; i < arr.length; i++) {
        if(start !== arr[i]) return start;
        start++;
    }

    return start;
} 

console.log(getMissingNumbers2([5, 6, 7, 9, 10]));

// * Brute force method - 
function getMissingNumbers3(arr){
    let seen = {};
    let max = 0;
    let missing = [];

    for (const num of arr) {
        if(num > max) max = num;
        seen[num] = (seen[num] || 0) + 1;
    }

    for(let i = 1; i <= max; i++){
        if(!seen[i]) missing.push(i);
    }

    return missing;
}

// console.log(getMissingNumbers3([1, 5, 2, 4, 10]));