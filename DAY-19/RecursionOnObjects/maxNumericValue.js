// ? Q. Find the Maximum Numeric Value in a Nested Object.
function getMax(mainObj){
    let max = -Infinity;

    function helper(obj){
        for (const value of Object.values(obj)) {
            if(value > max && typeof(value) === "number"){
                max = value;
            } else if(typeof(value) === "object" && value !== null){
                helper(value);
            }
        }
    }

    helper(mainObj);
    return max;
}