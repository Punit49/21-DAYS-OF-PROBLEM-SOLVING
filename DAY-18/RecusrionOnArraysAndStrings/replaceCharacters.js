// ? Q. Replace All Occurrences of a Character in a String Using Recursion.
function replaceChar(str, c1, c2){
    str = Array.from(str);

    function helper(i){
        if(i < 0) return str;
        if(str[i] === c1){
            str[i] = c2;
        }
        return helper(i - 1);
    }

    return helper(str.length - 1).join("");
}