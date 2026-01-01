// ? Q. Sort Only the Even Numbers in an Array (Odd Numbers Stay in Place) - 
function evenBubbleSort(arr){
    
    for(let i = 0; i < arr.length - 1; i++){
        let sorted = false;
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j + 1] && arr[j] % 2 === 0 && arr[j + 1] % 2 === 0){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                sorted = true;
            }
        }
        if(!sorted) break;
    }

    return arr;
}