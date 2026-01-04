// ? Q. Sort an Array but Keep Odd Numbers Fixed.
function sortAndKeepOddFixed(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            let cur = arr[i];
            let insertPos = i;

            for(let j = i - 1; j >= 0; j--){
                if(arr[j] > cur && arr[j] % 2 === 0){
                    arr[insertPos] = arr[j];
                    insertPos = j;
                }
            }

            arr[insertPos] = cur;
        }
    }

    return arr;
}

// * Simpler version - 
function sortAndKeepOddFixed2(arr){
    let evens = [];

    for (const num of arr) {
        if(num % 2 === 0) evens.push(num);
    }

    evens.sort((a, b) => a - b);
    
    let e = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            arr[i] = evens[e++];
        }
    }

    return arr;
}
