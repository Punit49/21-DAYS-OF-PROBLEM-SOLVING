// ? Q. Print All Node Names in the Tree (Depth-First Order). 
function getNodes(node, indent) {
    if (!node || !node.name) return;

    let spaces = "  ".repeat(indent);
    console.log(spaces + node.name);

    for (const child of node.children) {
        getNodes(child, indent + 1);
    }
}


// * Example -
getNodes({
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
}, 0);