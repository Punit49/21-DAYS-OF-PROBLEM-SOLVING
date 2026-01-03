// ? Q. Find the LCM (Least Common Multiple) of Two Numbers -
// * Optimized Method -  
function gcd(x, y){
    while(y !== 0){
        let r = x % y;
        x = y;
        y = r;
    }
    return x;
}

function getLCM(n1, n2){
    let HCF = gcd(n1, n2);
    return (n1 * n2) / HCF;
}

// * Bruteforce Method - 
function findLCM(n1, n2){
    let lcm = n1 > n2 ? n1 : n2;

    while(true){
        if(lcm % n1 === 0 && lcm % n2 === 0){
            return lcm;
        }
        lcm++
    }
}