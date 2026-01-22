// ? Q. Count the Total Number of Nodes in the Tree.
function getNodeCount(node){
    if(!node || !node.name) return 0;
    let count = 1;

    for (const child of node.children) {
        count += getNodeCount(child);
    }

    return count;
}

// * Using helper function -
function getNodeCount2(tree){
    let count = 0;

    function helper(node){
        if(!node || !node.name) return;
        count++;
        for (const child of node.children) {
            helper(child);
        }
    }

    helper(tree);
    return count;
}

// Example -
console.log(getNodeCount({
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
}));