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

    // Assignment - 2
    search(value){
        if(this.value === value) return this;

        if(value > this.value && this.right !== null){
            return this.right.search(value);
        } else if(value < this.value && this.left !== null){
            return this.left.search(value);
        } 
        return null;
    }   

    // Assignment - 3
    delete(value, parent){
        if(value > this.value){
            if(this.right) this.right = this.right.delete(value);
        } 
        if(value < this.value){
            if(this.left) this.left = this.left.delete(value);
            return this;
        } 
        
        if(this.left === null && this.right === null){
            return null;
        } 

        if(this.right === null) return this.left;
        if(this.left === null) return this.right;

        let leftSubtree = this.left;

        let maxNode = leftSubtree;
        while(maxNode.right !== null){
            maxNode = maxNode.right;
        }

        maxNode.right = this.right;

        return leftSubtree;
    }
}

const BST = new BSTnode(100);

BST.insert(80);
BST.insert(90);
BST.insert(110);
BST.insert(10);
BST.insert(200);
console.log(BST);