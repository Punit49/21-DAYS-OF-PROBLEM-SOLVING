// ? Q. Print the Path to a Given File.
function getFilePath(node, file){
    if(!node || !file) return "";
    
    if(node.name === file) return node.name;

    for (const child of node.children) {
        let result = getFilePath(child, file);
        if(result) {
            return node.name + "." + result;
        }
    }

    return "";
}

console.log(getFilePath({
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
}, "song1.mp3"))