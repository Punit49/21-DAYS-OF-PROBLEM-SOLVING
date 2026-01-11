// ? Q. Check If a Value Exists in a Nested Object.
function isExists(mainObj, target){
    function helper(obj){
        for (const value of Object.values(obj)) {
            if(value == target) {
                return true;
            }
            if(typeof(value) === "object" && value !== null){
                if(helper(value)) return true;
            }
        }
        return false;
    }

    return helper(mainObj);
}

// Learning - In recursion, return values must be propagated upward, otherwise they are lost.

// * Using flag -
function isExists2(mainObj, target){
    let isThere = false;
    function helper(obj){
        for (const value of Object.values(obj)) {
            if(typeof(value) === "object" && value !== null){
                helper(value);
            }
            if(value == target) {
                isThere = true;
            }
        }
    }

    helper(mainObj);
    return isThere;
}
