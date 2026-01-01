// ? Q. Sort an Array of Characters Case-Insensitive -
function caseInsenitiveBubbleSort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let sorted = false;

        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j].toLowerCase() > arr[j + 1].toLowerCase()){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                sorted = true;
            }
        }
        
        if(!sorted) break;
    }

    return arr;
}