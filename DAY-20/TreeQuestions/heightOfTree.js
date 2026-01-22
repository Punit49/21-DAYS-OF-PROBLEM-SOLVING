// ? Q. Find the Height of the Tree.
function getTreeHeight(node){
    if(!node || node.children.length === 0) return 0;

    let maxDepth = 0;

    for (const child of node.children) {
        maxDepth = Math.max(maxDepth, getTreeHeight(child));
    }

    return maxDepth + 1;
}

console.log(getTreeHeight({
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