class BSTnode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value){
        if(value === this.value) return null;
        const newNode = new BSTnode(value);
        
        if(value > this.value) {
            if(this.right === null){
                this.right = newNode;
            } else {
                this.right.insert(value);
            }
        } else {
            if(this.left === null){
                this.left = newNode;
            }  else {
                this.left.insert(value);
            }
        }
    }
}

const BST = new BSTnode(100);

BST.insert(80);
BST.insert(110);
BST.insert(10);
BST.insert(200);
console.log(BST);