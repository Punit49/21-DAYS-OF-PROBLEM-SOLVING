// ? Q. Reverse a Number Using Recursion.
function reverseNumber(n){
    function helper(n, rev){
        if(n === 0) return rev;
        return helper(Math.floor(n / 10), rev * 10 + (n % 10));
    }

    return helper(n, 0);
}

/*  ======= Approach ========
    Our approach is to reverse the number by processing it digit by digit using recursion 
    while carrying the result along. In each recursive call, we take the last digit of the 
    number using modulo 10 and append it to a growing reversed value by multiplying the 
    current result by 10 and adding that digit. At the same time, we remove the last digit 
    from the original number by dividing it by 10. This continues until the number becomes zero, 
    at which point the accumulated reversed value is returned. All the required state is passed 
    through function parameters, making the recursion pure and clean.
 */

// * Using global variable -
let exp = 1;
function reverseNumber2(n){
    if(n < 10){
        return n;
    }
    let nextDigits = reverseNumber2(Math.floor(n / 10));
    exp = exp * 10;
    let firstDigit = n % 10;
    return firstDigit * exp + (nextDigits);
}