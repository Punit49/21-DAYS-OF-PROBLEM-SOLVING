// ? Q. Find the Length of the Longest Subarray with No Repeating Elements -
// * Sliding Window Algorithm - 
function getLongestNonRepeatingSubALen(arr){
    let hash = Array(256).fill(-1);
    let l = 0;
    let r = 0;
    let maxLen = 0;
    
    while(r < arr.length){
        let char = arr[r];
        if(hash[char] !== -1){
            if(hash[char] >= l){
                l = hash[char] + 1;
            }
        } 
        maxLen = Math.max(maxLen, r - l + 1);
        hash[char] = r;
        r++;
    }

    return maxLen;
}

console.log(getLongestNonRepeatingSubALen([1, 2, 3, 2, 3, 5, 9]));

// * Other Way -
function getLongestNonRepeatingSubALen2(arr){
    let start = 0;
    let maxLen = 0;
    let seen = {};
    let end = 0;

    for(let i = 0; i < arr.length; i++){
        let char = arr[i];

        if(seen[char] !== undefined){
            start = Math.max(start, seen[char]); 
        }

        seen[char] = i + 1; 
        end = i;

        maxLen = Math.max(maxLen, end - start + 1);
    }

    return maxLen;
}

// console.log(getLongestNonRepeatingSubALen2([1, 2, 3, 2, 3, 5, 9]));

// * Bruteforce method - 
function getLongestNonRepeatingSubALen3(arr){
    let maxLen = 0;

    for(let i = 0; i < arr.length; i++){
        let seen = {};
        for(let j = i; j < arr.length; j++){
            if(seen[arr[j]]) break;
            seen[arr[j]] = true;
            maxLen = Math.max(maxLen, j - i + 1);
        }
    }
    return maxLen;
}

// console.log(getLongestNonRepeatingSubALen3([1, 1, 4, 1, 2, 5, 6, 7, 1, 4]))
