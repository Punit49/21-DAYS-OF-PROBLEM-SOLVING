// ? Q. Count Total Number of Leaf Nodes in the Tree.
function countLeafNodes(node){
 
   let count = node.children.length === 0 ? 1 : 0;
    
    for (const child of node.children) {
        count += countLeafNodes(child);
    }
    
    return count;
}

console.log(countLeafNodes({
  name: "A",
  children: [
    {
      name: "B",
      children: [
        { name: "D", children: [] }
      ]
    },
    {
      name: "C",
      children: []
    }, 
    {
        name: "E",
        children: [{name: "F", children: []}]
    },
    {
        name: "Z",
        children: []
    }
  ]
}))