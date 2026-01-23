// ? Q. DOM: Count How Many Times a Specific Tag Appears.
function tagCount(node, tag){
    if(!node || !node.children) return 0;
    let count = 0;

    if(node.localName === tag.toLowerCase()) {
        count = 1;
    }

    for (const child of node.children) {
        count += tagCount(child, tag);
    }
    
    return count;
}

console.log(tagCount(document.body, "h1"));