// ? Q. Count Total Number of Objects Inside a Nested Structure (including root element).
function countObject(mainObj){
    let count = 1;
    function helper(obj){
        for (const value of Object.values(obj)) {
            if(typeof(value) === "object" && value !== null){
                count++;
                helper(value);
            }
        }
    }
    helper(mainObj);
    return count;
}