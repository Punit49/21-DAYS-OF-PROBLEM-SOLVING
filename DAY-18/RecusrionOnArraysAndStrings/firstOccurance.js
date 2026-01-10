// ? Q. Find the First Occurrence of an Element in an Array Using Recursion.
function firstOcc(str, char){
    if(str.length === 0) return -1;
    function helper(i){
        if(i === str.length) return -1;
        if(str[i] === char) return i;
        return helper(i + 1);
    }

    return helper(0);
}