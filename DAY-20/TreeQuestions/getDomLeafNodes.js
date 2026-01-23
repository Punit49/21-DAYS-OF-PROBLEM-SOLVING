// ? Q. DOM: Print Only Leaf DOM Elements.
function getLeafNodes(node){
    if(!node) return;

    if(node.children.length === 0){
        console.log(node.localName);
    }

    for (const child of node.children) {
        getLeafNodes(child);
    }
}

getLeafNodes(document.body);