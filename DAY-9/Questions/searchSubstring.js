// ? Q. Manual Substring Search (Without Using indexOf) - 
function searchSubstring(str, subStr){
    for(let i = 0; i <= str.length - subStr.length; i++){
        let match = true;

        for(let j = 0; j < subStr.length; j++){
            if(str[i + j] !== subStr[j]){
                match = false;
                break;
            }
        }

        if(match) return i;
    }
    return -1;
}

console.log(`Found at Index: ${searchSubstring("Hellwo world", "wor")}`);
