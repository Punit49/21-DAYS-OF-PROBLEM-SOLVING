// ? Q. Calculate Power Using Recursion (handles negative exponents).
function getPower(a, n){
    if(n === 0) return 1;
    if(n < 0) {
        return 1 / getPower(a, -n);
    }
    return a * getPower(a, n - 1);
}

// * Approach - 
/* 
When the exponent is negative, we don’t calculate the power directly because recursion works best 
when moving toward zero. So we first convert the negative exponent into a positive one using the 
rule a^-n = 1 / a^n. The function then calculates the power normally for the positive value 
(by multiplying the base repeatedly until the exponent becomes zero). Once that value is obtained, 
we simply take its reciprocal (divide 1 by it) to get the correct result for the negative exponent. 
This way, the same recursive logic is reused and the base case remains simple and safe.
*/