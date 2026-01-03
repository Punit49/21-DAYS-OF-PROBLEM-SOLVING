// ? Q. Find the Greatest Factor of a Number (Other Than Itself) - 
function greatestFactor(n){
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) return n / i;
    }
    return 1;
}