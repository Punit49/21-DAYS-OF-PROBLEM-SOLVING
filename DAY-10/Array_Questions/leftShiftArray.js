// ? Q. Left Shift an Array by One Position - 
function leftShiftArray(arr){
    for(let i = 1; i < arr.length; i++){
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]
    }
    return arr;
}

console.log(leftShiftArray([10, 20, 30, 40, 50]));