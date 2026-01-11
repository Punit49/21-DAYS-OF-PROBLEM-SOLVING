// ? Q. Find the Sum of All Numeric Values in a Nested Object.
function getSum(parentObj){
    function helper(obj){
        let sum = 0;
        for (const value of Object.values(obj)) {
            if(typeof(value) === "number"){
                sum += value;
            } else if(typeof(value) === "object" && value !== null){
                sum += helper(value); 
            }
        }
        return sum;
    }
    return helper(parentObj);
}