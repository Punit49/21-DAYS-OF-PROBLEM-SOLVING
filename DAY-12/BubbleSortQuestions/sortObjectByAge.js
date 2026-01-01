// ? Q. Sort an Array of Objects by Age (Ascending) - 
function sortArrayOfObject(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let sorted = false;

        for(let j = 0; j < arr.length - 1 - i; j++){
            if(arr[j].age > arr[j + 1].age){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                sorted = true;
            }
        }

        if(!sorted) break;
    }
    return arr;
}