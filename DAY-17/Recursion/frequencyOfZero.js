// ? Q. Count How Many Zeros Are Present in a Number Using Recursion.
function countZeros(n){
    n = Math.abs(n);
    function helper(num, count){
        if(num === 0) return count;
        if(num % 10 === 0) count++;
        return helper(Math.floor(num / 10), count);
    }
    return n === 0 ? 1 : helper(n, 0);
}

/*  ----- Learning ------ 
    In JavaScript, numbers do not keep leading zeros — 000000 is treated 
    exactly the same as 0, Leading zeros exist only in strings, not in numbers.
*/ 