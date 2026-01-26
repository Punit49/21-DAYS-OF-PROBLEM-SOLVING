// ? Q. Find the Position Where an Element Should Be Inserted in a Sorted Array. 
function findPositionToPlaceElement(arr, element){
    let j = arr.length - 1;

    while(j >= 0 && arr[j] > element){
        j--;
    }

    return j + 1;
}

// * Without insertion sort logic -
function findPositionToPlaceElement2(arr, element){
    let i = 0;

    while(i < arr.length && arr[i] < element){
        i++;
    }
    
    return i;
}