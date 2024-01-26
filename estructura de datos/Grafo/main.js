class Graph{
    constructor(){
        this.nodes= new Map();

    }
    addNode(value){
        const node = new Node(value);
        this.nodes.set(value,node);

    }
    addEgde(startValueNode,endValueNode){

        const startNode = this.nodes.get(startValueNode);
        const endNode = this.nodes.get(endValueNode);

        if(startNode && endNode){
            startNode.addEdge(endNode);
        }
    }

    show(){
        for (const node of this.nodes.values()) {
            
            const edges = node.edges.map(edge =>edge.value).join("|");


            console.log(`${node.value} --> ${edges}`)
            
        }
    }
}


class Node{
    constructor(value){
        this.value = value;
        this.edges =[];

    }

    addEdge(node){
        this.edges.push(node);
    }

}

const myGraph = new Graph();

myGraph.addNode("A")
myGraph.addNode("B")
myGraph.addNode("C")
myGraph.addNode("D")

myGraph.addEgde("A","B")
myGraph.addEgde("A","D")
myGraph.addEgde("B","C")
myGraph.addEgde("B","D")
myGraph.addEgde("C","D")
myGraph.addEgde("D","A")


myGraph.show()




