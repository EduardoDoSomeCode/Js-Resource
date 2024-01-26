class Stack{
    #items =[] //objeto de forma privada

    push(item){
        this.#items.push(item)
    }
    pop(){
        return this.#items.pop()
    }

    peek(){
        return this.#items[this.#items.length - 1]
    }

    size(){
        return this.#items.length
    }
    isEmpty(){
        return this.#items.length === 0
    }
    getItems(){
        return [...this.#items];
    }
}


const stack = new Stack();


stack.push("Pepe")
stack.push("Carlos")
stack.push("Robert")

console.log(stack)
console.log(stack.peek)
console.log(stack.size)

let inputStack = document.getElementById("name")
let listItems = document.getElementById("list")
const stackName = new Stack()


const showStack = () =>{
    const items = stackName.getItems()
    listItems.innerHTML =""

    items.map((item)=>{
        listItems.innerHTML += ` <li>${item}</li>`

    })
}
const addToStack =()=>{


    stackName.push( inputStack.value)
    inputStack.value =" "
    inputStack.focus()
    showStack()
}
const deletToStack =()=>{
    stackName.pop()
    showStack()
}