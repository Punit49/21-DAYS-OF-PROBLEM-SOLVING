// ? Q. Count How Many Times a Key Appears in a Nested Object.
function keyCount(mainObj, myKey){
    function helper(obj){
        let count = 0;
        for (const key of Object.keys(obj)) {
            let value = obj[key];
            if(key === myKey) count++;
            if(typeof(value) === "object" && value !== null){
                count += helper(value);
            }
        }
        return count;
    }

    return helper(mainObj);
}

/*  Learning -
    JavaScript objects cannot have duplicate keys; if defined, 
    the last occurrence overwrites the previous ones
*/