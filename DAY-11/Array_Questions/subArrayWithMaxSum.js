// ? Q. Maximum Subarray (Kadane’s Algorithm – O(n)) - 
function subArrayWithMaxSum(arr){
    let curSum = 0;
    let maxSum = -Infinity;
    let start = 0;
    let end = 0;
    let left = 0;
    
    for(let i = 0; i < arr.length; i++){
        if(curSum === 0) left = i;
        curSum += arr[i];

        if(curSum > maxSum) {
            maxSum = curSum;
            start = left;
            end = i
        }

        if(curSum < 0) {
            curSum = 0;
        }
    }

    return arr.slice(start, end + 1);
}

console.log(subArrayWithMaxSum([-2, 1, 4, -1, 2, 1, -5]));