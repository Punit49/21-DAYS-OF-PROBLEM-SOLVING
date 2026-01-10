// ? Q. Find the Length of a String Using Recursion.
function getLength(str){
    function helper(i){
        if(str[i] === undefined) return 0;
        return 1 + helper(i + 1);
    }
    return helper(0);
}