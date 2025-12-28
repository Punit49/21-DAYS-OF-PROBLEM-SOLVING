// ? Q. Maximum Subarray Sum (Kadane’s Algorithm – O(n)) - 
// * Using Kadane's Algorithm - 
function maxSubarraySum(arr){
    let maxSum = -Infinity;
    let curSum = 0;

    for (const num of arr) {
        curSum += num;

        if(curSum > maxSum) {
            maxSum = curSum;
        }

        if(curSum < 0){
            curSum = 0;
        }
    }
    
    return maxSum;
}

console.log(maxSubarraySum([-2, 1, -3, 4, -5, 2, 1, -5, 4]));

// * Bruteforce - 
function maxSubarraySum2(arr){
    let maxSum = -Infinity; 
    for(let i = 0; i < arr.length; i++){
        let sum = 0;
        let subArray = [];
        for(let j = i; j < arr.length; j++){
            sum += arr[j];
            subArray.push(arr[j]);
            if(sum > maxSum) maxSum = sum;
        }
    }

    return maxSum;
}

console.log(maxSubarraySum2([-2, 1, -3, 4, -1, 2, 1, -5, 4]));