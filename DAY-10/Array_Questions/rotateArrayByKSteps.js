// ? Q. Rotate an Array to the Right by K Steps - 

// * Using two pointer algorithm - We reverse the whole array, then reverse the first k elements and the remaining elements to restore correct order after rotation.
function rotateArrayByKSteps(arr, k){
    let n = arr.length;

    k = k % n;

    reverse(arr, 0, n - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);
    
    function reverse(arr, start, end){
        while(start < end){
            [arr[start], arr[end]] = [arr[end], arr[start]]
            start++;
            end--;
        }
    }

    return arr;
}

console.log(rotateArrayByKSteps([1, 2, 3, 4, 5], 3));

// * Bruteforce method - Firstly pushing elemenets from kth index to last of array, then pushing remaining elements in array so that we get desired rotated array.

function rotateArrayByKSteps2(arr, k){
    if(k > arr.length) return arr;
    let newArr = [];
    let start = arr.length - k;

    for(let i = start; i < arr.length; i++){
        newArr.push(arr[i]);
    } 
    for(let i = 0; i < start; i++){
        newArr.push(arr[i]);
    }
    return newArr
}   

console.log(rotateArrayByKSteps([1, 2, 3, 4, 5], 4));
