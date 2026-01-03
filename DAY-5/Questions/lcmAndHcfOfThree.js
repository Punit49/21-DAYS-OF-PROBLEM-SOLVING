// ? Q. Find the HCF and LCM of Three Numbers.
// * Euclidean Method - 
function getGCD(n1, n2){
    let divisor = n1 < n2? n1 : n2;
    let dividend = n1 > n2? n1 : n2;

    while(dividend % divisor !== 0){
        const remainder = dividend % divisor;
        dividend = divisor;
        divisor = remainder;
    }

    return divisor;
}

function findLCM(a, b){
    return (a * b) / getGCD(a, b);
}

function getLCMandHCF(n1, n2, n3){
    let HCF = getGCD(getGCD(n1, n2), n3);
    let LCM = findLCM(findLCM(n1, n2), n3);
    return {HCF, LCM};
}

// * Bruteforce Method - 
function LCMandHCF(n1, n2, n3){
    let smallest = n1 < n2? n1 : n2 < n3? n2 : n3;
    let HCF;
    let LCM = smallest;

    for(let i = smallest; i >= 1; i--){
        if(n1 % i == 0 && n2 % i == 0 && n3 % i == 0){
            HCF = i;
            break;
        }
    }

    while(true){
        if(LCM % n1 == 0 && LCM % n2 == 0 && LCM % n3 == 0){
            break;
        }
        LCM++;
    }

    return {HCF, LCM};
}