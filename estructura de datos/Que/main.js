class Queue {
    #items = []



    enqueue(item) {
        this.#items.push(item)
    }

    dequeue() {
        return this.#items.shift()
    }

    isEmpty() {
        return this.#items.length === 0
    }
    peek() {
        return this.#items[0];
    }

    size() {
        return this.#items.length
    }

    getItems() {
        return [...this.#items]
    }

}

const divRequest = document.getElementById("req");
const divResult = document.getElementById("result");
let i = 1;
const url = "https://jsonplaceholder.typicode.com/posts"

const Cola = new Queue()
Cola.enqueue("Pepe")
Cola.enqueue("Roberto")
Cola.enqueue("Eduardo")
console.log(Cola.peek())
Cola.dequeue()
console.log(Cola.peek())

const reuqestCola = new Queue()
const add = () => {
    reuqestCola.enqueue(i++)
    request()

}

const requestPosts = async () => {
    while (!reuqestCola.isEmpty()) {
        const res = await fetch(url + "/" + reuqestCola.dequeue())
        const data = await res.json();

        request()
        divResult.innerHTML = `<p>${data.id} : ${data.title}</p>` + divResult.innerHTML
    }
}
const request = () => {
    const items = reuqestCola.getItems()

    if (items.length === 0) {
        divRequest.innerHTML = "Sin solicitud"
        return
    }
    divRequest.innerHTML = ""
    items.forEach((item) => {
        divRequest.innerHTML += `${item} |`
    })
}

