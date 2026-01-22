// ? Q. Check If a Folder or File Exists in the Tree.
function isFileFolderExists(node, target){
    if(!node || !target) return false;

    if(node.name === target) return true;

    for (const child of node.children) {
      if(isFileFolderExists(child, target)) return true;
    }

    return false;
}

console.log(isFileFolderExists({
  name: "root",
  children: [
    {
      name: "src",
      children: [
        { name: "index.js", children: [] },
        { name: "app.js", children: [] }
      ]
    },
    {
      name: "public",
      children: [
        { name: "index.html", children: [] }
      ]
    },
    { name: "package.json", children: [] }
  ]
}, "package.json"));