// ? Q. Convert All String Values to Uppercase in a Nested Object.
function nestedUppercase(mainObject){
    function helper(obj){
        for (const key of Object.keys(obj)) {
            let value = obj[key];
            if(typeof(value) === "string"){
                obj[key] = value.toUpperCase();
            } else if(typeof(value) === "object" && value !== null){
                helper(value);
            }
        }
    }
    helper(mainObject);
    return mainObject;
}

// If object mutation is not allowed, we can use structredClone(obj) to deep copy the object.