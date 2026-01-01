// ? Q. Sort an Array of Strings by Length (Shortest to Longest) - 
function sortStringArrayByLength(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let sorted = false;
        for(let j = 0; j < arr.length - 1 - i; j++){
            if(arr[j].length > arr[j + 1].length){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                sorted = true;
            }
        }
        if(!sorted) break;
    }
    return arr;
}