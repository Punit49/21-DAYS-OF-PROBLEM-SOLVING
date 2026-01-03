// ? Q. Check if a Number is a Perfect Number.
function isPerfect(n){
    let sum = 1;

    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            if(i !== (n / i)) sum = sum + (n / i);
            sum += i;
        }
    }

    return sum === n;
}