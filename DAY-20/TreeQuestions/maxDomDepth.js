// ? Q. DOM: Find the Maximum DOM Depth of the Page. 
function getDomDepth(root){
    let maxDepth = 1;

    function helper(node, depth){
        if(!node || !node.children) return;

        if(depth > maxDepth) maxDepth = depth;
        
        for (const child of node.children) {
            helper(child, depth + 1); 
        }
    }

    helper(root, 1);
    return maxDepth;
}

console.log(getDomDepth(document.body));