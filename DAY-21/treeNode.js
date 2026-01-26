// ? Assignment 1 -

class TreeNode {
    constructor(name){
        this.name = name;
        this.children = [];
    }

    add(name){
        let node = new TreeNode(name);
        this.children.push(node);
        return node;
    }
}

const media = new TreeNode("media");
const images = media.add("images");
const music = media.add("music");
const videos = media.add("videos");

const events = images.add("events");
const wallpapers = images.add("wallpapers");

const birthday = events.add("birthday");
birthday.add("cake.png");
birthday.add("party.jpg");

wallpapers.add("nature.jpg");
wallpapers.add("city.png");

const rock = music.add("rock");
rock.add("song1.mp3");

console.log(media); 