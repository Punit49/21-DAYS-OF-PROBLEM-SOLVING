// ? Q. Check If an Array Becomes Sorted After Inserting One Element.
function isSortedAfterInsertion(arr){
    function isSorted(arr){
        for(let i = 1; i < arr.length; i++){
            if(arr[i] < arr[i - 1]){
                return false;
            }
        }
        return true;
    }
    
    let idx = -1;
    let n = arr.length;

    for(let i = 1; i < n; i++){
        if(arr[i] < arr[i - 1]){
            idx = i;
            break;
        }
    }

    if(idx === -1) "Yes"

    let arr1 = arr.slice(0, idx).concat(arr.slice(idx + 1));
    if(isSorted(arr1)) return "Yes";

    let arr2 = arr.slice(0, idx - 1).concat(arr.slice(idx));
    if(isSorted(arr2)) return "Yes";

    return "No";
}

// * Check if the array becomes sorted by inserting the last element somewhere in the array.
function isSortedAfterInsertion2(arr){
    let j = arr.length - 2;
    let ele = arr[arr.length - 1];

    while(j >= 0 && arr[j] > ele){
        arr[j + 1] = arr[j];
        j--;
    }

    arr[j + 1] = ele;

    for(let i = 1; i < arr.length; i++){
        if(!(arr[i] >= arr[i - 1])){
            return "No";
        }
    }

    return "Yes";
}