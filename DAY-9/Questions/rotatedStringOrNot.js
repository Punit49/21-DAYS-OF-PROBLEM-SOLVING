// ? Q. Check if One String is Rotation of Another - 
function isRotatedString(str, subStr){
    if(str.length !== subStr.length) return false;
    str = str + str;

    for(let i = 0; i <= str.length - subStr.length; i++){
        let match = true;

        for(let j = 0; j < subStr.length; j++){
            if(str[i + j] !== subStr[j]){
                match = false;
                break;
            }
        }

        if(match) return true;
    }
    
    return false;
}

// * Approach - 
/*  
    This function checks if one string is just a rotated form of another.
    If both strings are not of the same length, rotation is not possible.
    By doubling the original string, we cover all possible rotations.
    Then we simply check if the second string exists inside it.
*/

console.log(isRotatedString("abcdefgh", "fghabcde"));

// * Using built-ins 
// We can use String.includes(target) method or indexof method -\

function isRotated(str, subStr){
    return (str + str).includes(subStr);
}

function isRotated2(str, subStr){
    return (str + str).indexOf(subStr) !== -1;
}

console.log(isRotated("abcdefgh", "fghabcde"));
console.log(isRotated2("abcdefgh", "fghabcde"));