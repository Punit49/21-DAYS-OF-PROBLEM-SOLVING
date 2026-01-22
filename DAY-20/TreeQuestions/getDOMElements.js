// ? Q. Print All Tag Names Inside `document.documentElement` (DFS).
function getDomElements(node){
    console.log(node.localName);
    for (const child of node.children) {
        getDomElements(child)
    }
}   

getDomElements(document.documentElement);