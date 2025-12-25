// ? Q. Find All Unique Pairs Whose Sum Equals a Target - 
function uniquePairsToGetTarget(arr, target){
    if(arr.length < 1) return {};
    let seen = {};
    let pairs = [];

    for (const num of arr) {
        let required = target - num;
        
        if(seen[required] > 0){
            seen[required]--;
            pairs.push(`(${num}, ${required})`);
        }  else {
            seen[num] = (seen[num] || 0) + 1;
        }
    }

    return pairs;
}

console.log(uniquePairsToGetTarget([1, 2, 3, 4, 5], 6));

// * Using Set() -
function uniquePairsToGetTarget2(arr, target){
    let seen = new Set();
    let pairs = [];

    for (const num of arr) {
        let required = target - num;
        
        if(seen.has(required)){
            pairs.push(`(${num}, ${required})`);
        }  else {
            seen.add(num);
        }          
    }
    
    return pairs;
}

console.log(uniquePairsToGetTarget2([1, 2, 3, 4, 5], 7));