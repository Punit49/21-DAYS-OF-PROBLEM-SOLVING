// ? Q. Find the Path to a Given Key in a Nested Object.
function getPath(mainObj, myKey){
    let path = "";
    
    function helper(obj){
        for (const key of Object.keys(obj)) {
            let value = obj[key];
            if(key === myKey){
                path = key;
                return true;
            } else if(typeof(value) === "object" && value !== null){
                if(helper(value)){
                    path = key + "." + path;
                    return true;
                }
            }
        }
        return false;
    }

    helper(mainObj);
    return path;
}