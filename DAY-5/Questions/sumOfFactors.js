// ? Q. Sum of All Factors of a Number.
function getFactorsSum(n){
    let sum = 0;
    for(let i = 1; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            let pair = n / i;
            if(i !== pair) sum += pair;
            sum += i;
        }
    }
    return sum;
}