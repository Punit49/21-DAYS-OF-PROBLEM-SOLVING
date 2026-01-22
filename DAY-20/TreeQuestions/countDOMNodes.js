// ? Q. Count Total Number of Elements Inside document.body
function countDomNodes(node){
    let count = 1;

    for (const child of node.children) {
        count += countDomNodes(child);
    }

    return count;
}

console.log(countDomNodes(document.body));