// ? Q. Find the Second Largest Element - 
// * Approach - I go through the array only one time. keeping two values, one for the biggest number and one for the second biggest number. If a number bigger than the current biggest is found, then old biggest is moved to second biggest. At the end, if there is no second biggest number, returning null, otherwise return secondMax.

function secondLargestElement(arr){
    if(arr.length < 2) return null;
    let max = -Infinity;
    let secondMax = -Infinity;

    for(let i = 0; i < arr.length; i++){
        let val = arr[i];

        if(val > max){
            secondMax = max;
            max = val;
        } 
        else if(val > secondMax && val !== max){
            secondMax = val;
        }

    }
    return secondMax === -Infinity ? null : secondMax;
}

console.log(secondLargestElement([5]));