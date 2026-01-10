// ? Q. Find the Last Occurrence of an Element in an Array Using Recursion.
function lastOcc(str, char){
    if(str.length === 0) return -1;

    function helper(i){
        if(i < 0) return -1;
        if(str[i] === char) return i;
        return helper(i - 1);
    }

    return helper(str.length - 1);
}