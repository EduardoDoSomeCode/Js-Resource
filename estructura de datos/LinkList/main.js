class Node {
    constructor(value) {
        this.value = value;
        this.next = null;

    }
}


class LinkList {

    constructor() {
        this.head = null;
    }

    add(value) {
        const node = new Node(value)
        // Cuando se tiene un elemento, se añade a la cabeza
        if (this.head === null) {
            this.head = node;
        } else {

            // Cuando hay multiples elementos se añaden al cuerpo
            let current = this.head

            while (current.next !== null) {
                current = current.next

            }
            current.next = node
        }

    }

    show() {
        let current = this.head
        while (current !== null) {
            console.log(current.value)

            current = current.next

        }
    }

    size() {
        let count = 0

        let current = this.head

        while (current !== null) {
            count++
            current = current.next
        }

        return count
    }
    clear() {
        this.head = null
    }

    delete(value) {
        if (this.head.value === value) {
            this.head === this.head.next
        } else {
            let current = this.head

            while (current.next !== null) {


                if (current.next.value === value) {
                    current.next = current.next.next
                    break

                }

                current = current.next

            }
        }


    }
}

const listaEnlazada = new LinkList()

listaEnlazada.add("A")
listaEnlazada.add("B")
listaEnlazada.add("C")
listaEnlazada.show()
console.log(listaEnlazada.size())
listaEnlazada.delete("B")
listaEnlazada.show()


//Ejemplo de uso de lista enlazada
const title = document.getElementById("title")
const image = document.getElementById("image")
const divNext = document.getElementById("next")

const moviesLinkList = new LinkList();
moviesLinkList.add({ name: "Avenger", picture: "img/avenger.jpg" })
moviesLinkList.add({ name: "SpiderMan", picture: "spiderman.jpg" })
moviesLinkList.add({ name: "Ironman", picture: "ironman.jpg" })

moviesLinkList.show()


const showMovies = () => {

    const movie = moviesLinkList.head.value

    title.innerHTML = movie.name
    image.src = movie.picture


    if (moviesLinkList.head ) {
        const movieNext = moviesLinkList.head.next.value
        divNext.innerHTML = "Siguiente: " + movieNext.name
    } else {
        divNext.innerHTML = "No hay mas peliculas"
    }
}

const nextMovie = () => {
    if (moviesLinkList.head.next) {
        moviesLinkList.delete(moviesLinkList.head.value)
        showMovies()
    }
}

