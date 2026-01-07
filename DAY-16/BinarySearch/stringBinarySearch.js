// ? Q. Search for a Character in a Sorted String Using Binary Search. 
function stringBinarySearch(str, char){
    let start = 0;
    let end = str.length - 1;

    while(start <= end){
        let mid = start + Math.floor((end - start) / 2);

        if(char > str[mid]){
            start = mid + 1;
        } else if(char < str[mid]){
            end = mid - 1;
        } else {
            return mid;
        }
    }

    return -1;
}