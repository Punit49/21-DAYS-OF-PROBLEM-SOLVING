// ? Q. Count the Number of Vowels in a String Using Recursion.
function countVowel(str){
    if(str.length === 0) return 0;
    str = str.toLowerCase();

    function helper(i){
        if(i < 0) return 0;
        if(str[i] === "a" || str[i] === "e" || 
            str[i] === "i" ||str[i] === "o" || str[i] === "u"){   
                return 1 + helper(i - 1);
        } else {
            return helper(i - 1);
        } 
    }
    return helper(str.length - 1);
}