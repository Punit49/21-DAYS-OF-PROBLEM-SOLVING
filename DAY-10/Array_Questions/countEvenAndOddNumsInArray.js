// ? Q. Count Even and Odd Numbers in an Array - 
// * Approach - We traverse the array once and use modulus to count even and odd numbers.

function countEvenOddInArray(arr){
    let even = 0;
    let odd = 0;

    for (const ele of arr) {
        if(ele % 2 === 0) even++;
        else odd++
    }

    return {even, odd};
}

console.log(countEvenOddInArray([2, 5, 7, 8, 10, 12, 55]));