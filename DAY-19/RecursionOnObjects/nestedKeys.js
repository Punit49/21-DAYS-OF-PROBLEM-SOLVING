// ? Q. Print All Keys in a Nested Object.
function getKeys(mainObj){
    function helper(obj){
        for (const key of Object.keys(obj)) {
            let value = obj[key]
            console.log(key);
            if(typeof(value) === "object" && value !== null){
                helper(value);
            } 
        }
    }
    return helper(mainObj);
}