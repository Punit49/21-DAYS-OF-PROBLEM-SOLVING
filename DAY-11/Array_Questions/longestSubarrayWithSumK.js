// ? Q. Find the Longest Subarray with Sum = K 
// * Using Prefix sum algorithm -
function longestSubarraySumK(arr, k){
    let prefixSum = 0;
    let seen = {0: -1};
    let start = -1;
    let end = -1;

    for(let i = 0; i < arr.length; i++){
        prefixSum += arr[i];
        if(seen[prefixSum] === undefined){
            seen[prefixSum] = i;
        }
        if(seen[prefixSum - k] !== undefined){
            let len = i - seen[prefixSum - k];
            if(len >= (end - start + 1)){
                start = seen[prefixSum - k] + 1;
                end = i;
            }
        }
    }
    
    return start  < 0 || end < 0 ? [] : arr.slice(start, end + 1);
}

console.log(longestSubarraySumK([5, 2, 2, 5, 1, 1, 1, 1, -9], 4));

// * Bruteforce - 
function longestSubarraySumK2(arr, k){
    let maxLen = 0;
    let maxSubArray = [];

    for(let i = 0; i < arr.length; i++){
        let subArray = [];
        let sum = 0;
        for(let j = i; j < arr.length; j++){
            sum += arr[j];
            subArray.push(arr[j]);
            if(sum === k && subArray.length > maxLen){
                maxLen = subArray.length;
                maxSubArray = [...subArray];
            }
        }
    }

    return maxSubArray;
}

// console.log(longestSubarraySumK2([1, 2, 3, 4, 1, -1, 1, 5], 9));

// * Optimized (Only positive numbers) -
function longestSubarraySumK3(arr, k){
   let startIdx = -1;
   let endIdx = -1;
   let maxLen = 0;
   let curSum = 0;
   let idx = 0;

   for(let i = 0; i < arr.length; i++){
        curSum += arr[i];

        while(curSum > k && idx <= i){
            curSum -= arr[idx];
            idx++;
        }

        if(curSum === k){
            let len = i - idx + 1;
            if(len > maxLen){
                maxLen = len;
                startIdx = idx;
                endIdx = i;
            }
        }
    }
    return startIdx !== -1 ? arr.slice(startIdx, endIdx + 1) : [];
}

// console.log(longestSubarraySumK3([3, 2, 1, 1, 1, -2], 5)); 
