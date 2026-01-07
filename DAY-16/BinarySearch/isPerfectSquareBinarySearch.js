// ? Q. Check If a Number Is a Perfect Square Using Binary Search.
function isPerfectSquare(num){
    if (num < 2) return true;
    let start = 2;
    let end = num;
    let ans = -1;

    while(start <= end){
        let mid = start + Math.floor((end - start) / 2);

        let square = mid * mid;

        if(square === num){
            ans = mid;
            break;
        } else if(square > num){
            end = mid - 1;
        } else if(square < num){
            start = mid + 1;
        }
    }

    return ans === -1 ? false : true;
}

// * Approach
/*
    We start with a search range and pick a middle value. For each middle value, 
    we calculate its square and compare it with the given number.
    If the square is equal to the number, it means the number is a perfect square. 
    If the square is greater, we move the search to the left side, 
    and if it is smaller, we move to the right side. This process continues until the search range ends. 
    If no value gives an exact square, the number is not a perfect square.
*/