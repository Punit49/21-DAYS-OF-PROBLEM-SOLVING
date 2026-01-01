// ? Q. Sort an Array but Keep Zeros at the End (Zeros Fixed) -
function sortWithZerosInEnd(arr){
    let zeroIndex = arr.length - 1;

    for(let i = 0; i < zeroIndex; i++){
        if(arr[i] === 0){
            [arr[i], arr[zeroIndex]] = [arr[zeroIndex], arr[i]];
            zeroIndex--;
            i--;
        }
    }

    for(let i = 0; i < zeroIndex; i++){
        let sorted = false;
        for(let j = 0; j < zeroIndex - i; j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                sorted = true;
            }
        }
        if(!sorted) break;
    }

    return arr;
}