// ? Q. Print All Values in a Nested Object.
function getNestedValues(obj){
    for (const value of Object.values(obj)) {
        if(typeof(value) === "object" && value !== null){
            getNestedValues(value);
        } else {
            console.log(value);
        }
    }
}

// * Using Loop only (manual stack).
function getNestedValues2(obj){
    let stack = [obj];

    while(stack.length > 0){
        let current = stack.pop();

        for (const value of Object.values(current)) {
            if(typeof(value) === 'object' && value !== null){
                stack.push(value);
            } else {
                console.log(value);
            }
        }
    }
}