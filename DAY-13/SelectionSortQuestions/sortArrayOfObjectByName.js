// ? Q. Sort an Array of Objects by Name.
function sortArrayOfObjectByName(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let minIndex = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j].name.toLowerCase() < arr[minIndex].name.toLowerCase()){
                minIndex = j;
            }
        }
        if(minIndex !== i){
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}