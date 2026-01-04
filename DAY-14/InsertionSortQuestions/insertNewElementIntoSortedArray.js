// ? Q. Insert a New Element into an Already Sorted Array (Using Insertion Logic).
function inertNewEleIntoSortedArray(arr, element){
    let j = arr.length - 1; 

    while(j >= 0 && arr[j] > element){
        arr[j + 1] = arr[j];
        j--;
    }

    arr[j + 1] = element;

    return arr;
}