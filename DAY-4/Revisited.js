// ? Re attempting Day-4 Questions again - 
// ! Part A -
// * Q1. Split Number into Digits - 
function splitNumber(num){
    let Splitted = [];
    while(num > 0){
        Splitted.unshift(num % 10);
        num = Math.floor(num / 10);
    }
    return Splitted;
}

// console.log(splitNumber(9876354));

// * Q2. Remove the Decimal Point Mathematically - 
function removeDecimal(num){
    while(num % 1 !== 0){
        num = Number((num * 10).toFixed(10));
    }
    return num;
}

// console.log(removeDecimal(123.4567));

// * Q3. Separate Whole and Fractional Parts of a Number - 
function wholeAndFractional(num){
    let whole = num - (num % 1);
    let decimal = Number((num - whole).toFixed(10));
    return {whole, decimal};
}

// console.log(wholeAndFractional(1234.345));

// * Q4. Count Whole and Fractional Digits Separately - 
function countWholeAndFraction(num){
    let whole = num - (num % 1);
    let fraction = Number((num - whole).toFixed(10));
    let wholeCount = fractionCount = 0;

    while(whole > 0){
        wholeCount++;
        whole = Math.floor(whole / 10);
    }

    while(fraction % 1 !== 0){
        fractionCount++;
        fraction = Number((fraction * 10).toFixed(20));
    }

    return {wholeCount, fractionCount};
}

// console.log(countWholeAndFraction(123456.345));

// * Q5. Generate a Decimal Number from Whole and Fractional Digits - 
function getDecimalWhole(wh, fr){
    let whole = fraction = count = 0;

    for(let i = 0; i < wh.length; i++){
        whole = 10 * whole + wh[i];
    }

    for(let i = 0; i < fr.length; i++){
        count++;
        fraction = 10 * fraction + fr[i];
    }

    return{whole, fraction: fraction / (10 ** count)};
}

console.log(getDecimalWhole([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

