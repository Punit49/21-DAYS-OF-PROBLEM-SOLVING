// ? Q. Count Total Number of Keys in a Nested Object.
function getKeyCount(object){

    function helper(obj){
        let k = 0;
        for (const value of Object.values(obj)) {
            k++;
            if(typeof(value) === "object" && value !== null){
                k = k + helper(value);
            } 
        }
        return k;
    }

    return helper(object);
}

/*  Key Concept Used
    1. Object recursion
    3. Depth-first traversal
    4. Counting during traversal
*/