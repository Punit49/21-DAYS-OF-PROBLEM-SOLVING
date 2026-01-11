// ? Q. Replace a Value in a Nested Object Using Recursion.
function replaceVal(mainObj, myKey, newVal){
    function helper(obj){
        for (const key of Object.keys(obj)) {
            let value = obj[key];
            if(key === myKey){
                obj[key] = newVal;
            }
            else if(typeof(value) === "object" && value !== null){
                helper(value);
            }
        }
    }

    helper(mainObj);
    return mainObj;
}