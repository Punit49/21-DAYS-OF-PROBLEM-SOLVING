// ? Q. Print All Factors of a Number.
// * Optimized Time Complexity 
function getFactors2(n){
    let arr = [];

    for(let i = 1; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            if(i !== (n / i)) arr.splice(arr.length / 2, 0, (n / i))
            arr.splice(arr.length / 2, 0, i)
        }
    }
    return arr;
}

function getFactors(n){
    let arr = [1];
    for(let i = 2; i <= n/2; i++){
        if(n % i == 0) arr.push(i)
    }
    arr.push(n);
    return arr;
}