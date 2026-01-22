// ? Q. Find the Maximum Depth of the Tree. 

function getMaxDepth(node) {
    if(!node || node.children.length === 0) return 0;

    let maxDepth = 0;
    for (const child of node.children) {
        maxDepth = Math.max(maxDepth, getMaxDepth(child));
    }

    return maxDepth + 1;
}

// * Using helper function -
function getMaxDepth2(root){
    let maxDepth = 0;

    function helper(node, depth){
        if(depth > maxDepth) maxDepth = depth;

        for (const child of node.children) {
            helper(child, depth + 1); 
        }
    }

    helper(root, 0);
    return maxDepth;
}

console.log(getMaxDepth2({
  name: "A",
  children: [
    {
      name: "B",
      children: [
        { name: "D", children: [{name: "p", children: []}] }
      ]
    },
    {
      name: "C",
      children: []
    }
  ]
}))