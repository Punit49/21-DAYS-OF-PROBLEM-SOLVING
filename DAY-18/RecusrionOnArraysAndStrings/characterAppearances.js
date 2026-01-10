// ? Q. Count How Many Times a Character Appears in a String Using Recursion.
function charAppearnce(str, char){
    if(str.length === 0) return 0;

    function helper(i){
        if(i < 0) return 0;
        if(str[i] === char) {
            return 1 + helper(i - 1);
        } 
        return helper(i - 1);
    }

    return helper(str.length - 1);
}