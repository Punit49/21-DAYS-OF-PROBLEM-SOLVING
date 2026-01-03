// ? Q. Print All Multiples of a Number up to N.
function getMultiples(n, limit){
    let mulArr = []
    
    for(let i = n; i <= limit; i = i + n){
        mulArr.push(i);
    }

    return mulArr;
}