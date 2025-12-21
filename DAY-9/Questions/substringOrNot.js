// ? Q1. Find if One String Is a Substring of Another (Manual Method) - \
function isSubstring(input, target){
    let count = 0;
    
    for(let i = 0; i <= input.length; i++){
        if(input[i] === target[count]){
            count++;
            if(count == target.length) return true
        } else if(count < target.length){
            count = (input[i] === target[0]) ? 1 : 0;
        } else break;
    }
    
    return false;
}

console.log(isSubstring("helloaabcd", "aabc"));

// * Optimized Version - 
function isSubstringOpt(input, target){
    for(let i = 0; i <= input.length - target.length; i++){
        let match = true;
        
        for(let j = 0; j < target.length; j++){
            if(input[i + j] !== target[j]){
                match = false;
                break;
            }
        }

        if(match) return true;
    }

    return false;
}

// console.log(isSubstringOpt("aaabc", "aabc"));

