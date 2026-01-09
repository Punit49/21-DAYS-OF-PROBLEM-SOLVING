// ? Q. Print All Natural Numbers Between Two Given Numbers Using Recursion
function getMiddleNumbers(start, end){
    console.log(start);
    if(start >= end) return;
    getMiddleNumbers(start + 1, end);
}