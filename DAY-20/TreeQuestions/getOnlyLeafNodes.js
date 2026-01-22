// ? Q. Print Only Leaf Nodes.
function getLeafNodes(node){
    if(!node || !Array.isArray(node.children)) return;

    if(node.children.length === 0){
        console.log(node.name);
        return;
    } 
    for (const child of node.children) {
        getLeafNodes(child);
    }
}

// Example -
getLeafNodes({
  name: "media",
  children: [
    {
      name: "images",
      children: [
        {
          name: "events",
          children: [
            {
              name: "birthday",
              children: [
                { name: "cake.png", children: [] },
                { name: "party.jpg", children: [] },
              ],
            },
          ],
        },
        {
          name: "wallpapers",
          children: [
            { name: "nature.jpg", children: [] },
            { name: "city.png", children: [] },
          ],
        },
      ],
    },
    {
      name: "music",
      children: [
        {
          name: "rock",
          children: [{ name: "song1.mp3", children: [] }],
        },
      ],
    },
    {
      name: "videos",
      children: [],
    },
  ],
});