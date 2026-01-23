// ? Q. DOM: Check If an Element With Given ID Exists.
function isElementExists(node, targetID){
    if(!node || !node.children) return false;

    if(node.id === targetID) {
        return true;
    }

    for (const child of node.children) {
        if(isElementExists(child, targetID)) return true;
    }

    return false;
}

console.log(isElementExists(document.body, "box"));