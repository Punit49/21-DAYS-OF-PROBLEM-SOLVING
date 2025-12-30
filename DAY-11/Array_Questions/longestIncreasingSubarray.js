// ? Q. Find the Longest Increasing Subarray (Continuous) -
function longestIncreasingSubarray(arr){
    let start = 0;
    let maxStart = 0;
    let maxLen = 1;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[i - 1]){
            if(i - start + 1 > maxLen){
                maxLen = i - start + 1;
                maxStart = start;
            }
        }  else {
            start = i;
        }
    }

    return arr.slice(maxStart, maxStart + maxLen);
}


console.log(longestIncreasingSubarray([4, 5, 7, 1, 2, 3, 4]));