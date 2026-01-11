// ? Q. Find the Depth of a Nested Object.
function depthOfObj(mainObj){
    let maxDepth = 1;

    function helper(curObj, curDepth){
        maxDepth = Math.max(maxDepth, curDepth);

        for (const value of Object.values(curObj)) {
            if(typeof(value) === "object" && value !== null){
                helper(value, curDepth + 1);
            }
        }
    }

    helper(mainObj, 1);
    return maxDepth;
}