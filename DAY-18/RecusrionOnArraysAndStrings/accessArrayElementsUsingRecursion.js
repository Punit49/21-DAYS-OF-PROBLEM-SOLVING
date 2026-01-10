// ? Q. Print All Elements of an Array Using Recursion.
function getArrayElements(arr){
    if(arr.length === 0) return;
    function helper(i){
        if(i === arr.length) return;
        console.log(arr[i]);
        return helper(i + 1);
    }
    return helper(0);
}