class Node {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;


    }
}

class BynarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value)
        if (this.root === null) {
            this.root = node;
            return
        }

        let current = this.root;

        while (true) {
            if (value === current.value) break

            if (value < current.value) {

                if (current.left === null) {
                    current.left = node;
                    break;
                }

                current = current.left;
            } else {

                if (current.right === null) {
                    current.right = node;
                    break;
                }
                current = current.right;


            }
        }

    }
    search(value) {
        if (this.root === null) return false

        let i = 0;
        let current = this.root;

        while (current) {
            // console.log(++i)
            if (value === current.value) return current;

            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right
            }
        }


        return false
    }
    //Mostrar los nodos del arbol de forma ordenada de menor a mayor
    showInOrder(node) {
        if (node === undefined) {
            node = this.root;
        }

        if (node !== null) {
            this.showInOrder(node.left)
            console.log(node.value)

            this.showInOrder(node.right)
        }
    }
    //Orden en el cual aparece el arbol, ademas de sus elementos , elemento natural
    showPreOrder(node) {
        if (node === undefined) {
            node = this.root
        }

        if (node !== null) {

            console.log(node.value)
            this.showPreOrder(node.left)
            this.showPreOrder(node.right)
        }

    }
    //Ejecuion que se realiza sobre los hijos primero
    showPostOrder(node) {

        if (node === undefined) {
            node = this.root
        }

        if (node !== null) {
            this.showPostOrder(node.left)
            this.showPostOrder(node.right)
            console.log(node.value)

        }
    }
}

// const recursiveFunction = (n) => {
//     if (n === 0) return;

//     console.log(n)
//     recursiveFunction(n - 1)

// }

// recursiveFunction(5)
const loadTree = new BynarySearchTree()

loadTree.insert(5)
loadTree.insert(9)
loadTree.insert(1)
loadTree.insert(10)
loadTree.insert(15)
loadTree.insert(14)
loadTree.insert(8)
loadTree.insert(3)
loadTree.insert(4)


// console.log(loadTree)
// console.log(loadTree.search(10))

// loadTree.showInOrder()
// console.log("----------------------")
// loadTree.showPreOrder()
// console.log("----------------------")
// loadTree.showPostOrder()


const treeNumbers = new BynarySearchTree();

let json = []

for (let i = 0; i < 15000; i++) {

    json.push(i)
    treeNumbers.insert(i)
}


const numberToSearch = 14999

//busqued lineal 

let exists = false
const start = Date.now()

for (let n in json) {

    if (n === numberToSearch) {
        exists = true
        return exist
        break
    }
}
const end = Date.now()

if(exists){
    console.log("El numero existe ")
}else{
    console.log("El numero no existe")
}

console.log(`Tiempo de ejecucion es ${end - start }ms`)


// busqueda del arbol


const startTree = Date.now()

if(treeNumbers.search(numberToSearch)){
    console.log(`El numero ${numberToSearch} existe`)
}else{
console.log(`El numero  ${numberToSearch} NO existe`)

}

const endTree = Date.now()
console.log(`Tiempo de ejecucion de busqueda en arbol ${endTree -startTree  } ms`)